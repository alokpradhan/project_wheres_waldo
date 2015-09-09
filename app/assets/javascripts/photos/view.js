var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.view = (function(){
  var userList = [];

  function init(users) {
    userList = users;
    setClickListener();
    hoverOnPhoto();
  }

  function setClickListener(){
    $('#image').click( function(e) {
      // console.log("x " + e.pageX + " y " + e.pageY);
      // console.log(userList);
      makeTags(e.pageX, e.pageY, userList, true);
    });
  }

  function confirmSelection() {
    $('#active').click(function(e){
      var id = e.target.id;
      console.log(userList[id]);
      PHOTOPROCESSOR.controller.confirmSelection(userList[id]);
    });
  }

  function highlight() {
    $('#active').on('mouseenter', 'li', function(e) {
      $(e.target).css({'background': 'red'});
    });

    $('#active').on('mouseleave', 'li', function(e) {
      $(e.target).css({'background': 'white'});
    });
  }

  function makeTags(x, y, users, active) {
    renderTargetingBox(x, y);
    renderDropdown(x, y, users, active);
  }

  function renderTargetingBox(x, y) {
    var $box = $('<div>');
    $box.addClass('targeting-box');
    $box.css({ left: x, top: y });
    $('#photo').append($box);
    PHOTOPROCESSOR.controller.setBox(x,y);
  }

  function renderDropdown(x, y, users, active) {
    var $dropdown = $('<div>');
    for (var i = 0; i < users.length; i++){
      $listItem = $('<li>').text(users[i]);
      $listItem.attr('id', i);
      $dropdown.append($listItem);
    }
    $dropdown.addClass('dropdown');
    if (active) {
      $dropdown.attr('id', 'active');
    }
    $dropdown.css({ left: x, top: y+100, height: users.length*25 });
    $('#photo').append($dropdown);
    confirmSelection();
    highlight();
  }

  function removeConfirmedBoxes() {    
    $('.targeting-box').remove();
    $('.dropdown').remove();
  }

  function renderConfirmedBoxes(arr){
    removeConfirmedBoxes();
    for(var i=0; i< arr.length; i++){
      makeTags(arr[i].posX, arr[i].posY, [arr[i].user], false);
    }
  }

  function hoverOnPhoto() {
    $('#photo').on('mouseenter', function() {
      PHOTOPROCESSOR.controller.displayConfirmedBoxes();
    });

    $('#photo').on('mouseleave', function() {
      removeConfirmedBoxes();
    });
  }

  return {
    init: init,
    renderConfirmedBoxes: renderConfirmedBoxes
  };
})();
var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.view = (function(){
  var userList = [];

  function init(users) {
    setClickListener();
    userList = users;
  }

  function setClickListener(){
    $('#image').click( function(e) {
      console.log("x " + e.pageX + " y " + e.pageY);
      makeTags(e.pageX, e.pageY, userList);
    });
  }

  function confirmSelection() {
    $('.dropdown').click(function(e){
      var id = e.target.id;
      console.log(userList[id]);
      PHOTOPROCESSOR.controller.confirmSelection(userList[id]);
    });
  }

  function highlight() {
    $('.dropdown').on('mouseenter', 'li', function(e) {
      $(e.target).css({'background': 'red'});
    });

    $('.dropdown').on('mouseleave', 'li', function(e) {
      $(e.target).css({'background': 'white'});
    });
  }

  function makeTags(x, y, users) {
    renderTargetingBox(x, y);
    renderDropdown(x, y, users);
  }

  function renderTargetingBox(x, y) {
    var $box = $('<div>');
    $box.addClass('targeting-box');
    $box.css({ left: x, top: y });
    $('#photo').append($box);
    PHOTOPROCESSOR.controller.setBox(x,y);
  }

  function renderDropdown(x, y, users) {
    var $dropdown = $('<div>');
    for (var i = 0; i < users; i++){
      $listItem = $('<li>').text(users[i]);
      $listItem.attr('id', i);
      $dropdown.append($listItem);
    }
    $dropdown.addClass('dropdown');
    $dropdown.css({ left: x, top: y+100 });
    $('#photo').append($dropdown);
    confirmSelection();
    highlight();
  }

  function renderConfirmedBoxes(arr){
    $('.targeting-box').remove();
    $('.dropdown').remove();
    for(var i=0; i< arr.length; i++){
      makeTags(arr[i].posX, arr[i].posY, [arr[i].user]);
    }
  }

  return {
    init: init,
    renderConfirmedBoxes: renderConfirmedBoxes
  };
})();
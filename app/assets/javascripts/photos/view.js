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
      // PHOTOPROCESSOR.controller.displayConfirmedBoxes();
      removeActiveBox();
      makeTags(e.pageX, e.pageY, userList, true);
    });
  }

  function removeActiveBox() {
    $('#active-box').remove();
    $('#active-menu').remove();
  }

  function confirmSelection() {
    $('#active-menu').click(function(e){
      var id = e.target.id;
      // console.log(userList[id]);
      PHOTOPROCESSOR.controller.confirmSelection(userList[id]);
    });
  }

  function highlight() {
    $('#active-menu').on('mouseenter', 'li', function(e) {
      $(e.target).css({'background': 'red'});
    });

    $('#active-menu').on('mouseleave', 'li', function(e) {
      $(e.target).css({'background': 'white'});
    });
  }

  function makeTags(x, y, users, active) {
    renderTargetingBox(x, y, active);
    renderDropdown(x, y, users, active);
  }

  function renderTargetingBox(x, y, active) {
    var $box = $('<div>');
    $box.addClass('targeting-box');
    $box.css({ left: x-50, top: y-50 });
    if (active) {
      $box.attr('id', 'active-box');
    }
    $('#photo').append($box);
    PHOTOPROCESSOR.controller.setBox(x,y);
  }

  function renderDropdown(x, y, users, active) {
    var $dropdown = $('<div>');
    // console.log(users);
    for (var i = 0; i < users.length; i++){
      // console.log(users[i].name);
      $listItem = $('<li>').text(users[i].name);
      $listItem.attr('id', i);
      $dropdown.append($listItem);
    }
    $dropdown.addClass('dropdown');
    if (active) {
      $dropdown.attr('id', 'active-menu');
    }
    $dropdown.css({ left: x-50, top: y+50, height: users.length*30 });
    $('#photo').append($dropdown);
    confirmSelection();
    highlight();
  }

  function convertUserIDtoName(id) {
    for (var i = 0; i < userList.length; i++){
      console.log("Users list: " + userList[i].id);
      if(userList[i].id === id){
        return userList[i];
      }
    }
  }

  function removeConfirmedBoxes() {
    $('.targeting-box').remove();
    $('.dropdown').remove();
  }

  function renderConfirmedBoxes(arr){
    removeConfirmedBoxes();
    for(var i=0; i< arr.length; i++){
      // console.log("This is Working: " + convertUserIDtoName(arr[i].user_id));
      makeTags(arr[i].positionX, arr[i].positionY, [(arr[i].user_id)], false);
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
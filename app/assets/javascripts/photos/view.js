var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.view = (function(){
  var userList = [];

  function init(users) {
    setClickListener();
    userList = users;
  }

  function setClickListener(){
    $('#photo').click( function(e) {
      console.log("x " + e.pageX + " y " + e.pageY);
      makeTags(e.pageX, e.pageY);
    });
  }

  function makeTags(x, y) {
    renderTargetingBox(x, y);
    renderDropdown(x, y);
  }

  function renderTargetingBox(x, y) {
    var $box = $('<div>');
    $box.addClass('targeting-box');
    $box.css({ left: x, top: y });
    $('#photo').append($box);
    PHOTOPROCESSOR.controller.setBox(x,y);
  }

  function renderDropdown(x, y) {
    var $dropdown = $('<div>');
    for (var i = 0; i < userList.length; i++){
      $listItem = $('<li>').text(userList[i]);
      $dropdown.append($listItem);
    }
    $dropdown.addClass('dropdown');
    $dropdown.css({ left: x, top: y+100 });
    $('#photo').append($dropdown);
    PHOTOPROCESSOR.controller.setDropdown(x,y);
  }

  return {
    init: init
  };
})();
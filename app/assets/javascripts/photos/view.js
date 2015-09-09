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
      makeTags(e.pageX, e.pageY);
    });
  }

  function setMenuClickLisener() {
    $('.dropdown').click(function(e){
      // $target = e.target
      // console.log($(this));
      var id = e.target.id;
      console.log('id ' + id);
      PHOTOPROCESSOR.controller. ;
      
    })
  }

  function highlight() {
    $('.dropdown').on('mouseenter', 'li', function(e) {
      $(e.target).css({'background': 'red'});
    });

    $('.dropdown').on('mouseleave', 'li', function(e) {
      $(e.target).css({'background': 'white'});
    })
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
      $listItem.attr('id', i);
      $dropdown.append($listItem);
    }
    $dropdown.addClass('dropdown');
    $dropdown.css({ left: x, top: y+100 });
    $('#photo').append($dropdown);
    PHOTOPROCESSOR.controller.setDropdown(x,y);
    setMenuClickLisener();
    highlight();
  }

  return {
    init: init
  };
})();
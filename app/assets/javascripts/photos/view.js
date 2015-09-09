var PHOTOPROCESSOR = PHOTOPROCESSOR || {}

PHOTOPROCESSOR.view = (function(){
  function init() {
    setClickListener();
  };

  function setClickListener(){
    $('#photo').click( function(e) {
      console.log("x " + e.pageX + " y " + e.pageY);
      makeTags(e.pageX, e.pageY);
    })
  };

  function makeTags(x, y) {
    renderTargetingBox(x, y);
    // renderDropDown(x, y);
  };

  function renderTargetingBox(x, y) {
    var $box = $('<div>');
    $box.addClass('targeting-box');
    $box.css({ left: x, top: y });
  };

  function renderDropDown(x, y) {

  };


  return {
    init: init
  };
})();
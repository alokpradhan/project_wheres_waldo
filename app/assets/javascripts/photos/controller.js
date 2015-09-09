var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.controller = (function(model, view, $){

  function init() {
    // console.log(view);
    PHOTOPROCESSOR.view.init(PHOTOPROCESSOR.model.getUsers());
  }

  function setBox(x,y){
    PHOTOPROCESSOR.model.createTagBox(x,y);
  }

  function setDropdown(x,y){
    PHOTOPROCESSOR.model.createDropdown(x,y);
  }

  return {
    init: init,
    setBox: setBox,
    setDropdown: setDropdown
  };
})(PHOTOPROCESSOR.model, PHOTOPROCESSOR.view, $);

$(document).ready(function(){
  PHOTOPROCESSOR.controller.init();
});
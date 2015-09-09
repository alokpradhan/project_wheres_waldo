var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.controller = (function(model, view, $){

  function init() {
    // console.log(view);
    PHOTOPROCESSOR.view.init(PHOTOPROCESSOR.model.getUsers());
  }

  function setBox(x,y){
    PHOTOPROCESSOR.model.createTagBox(x,y);
  }

  // function setDropdown(x,y){
  //   PHOTOPROCESSOR.model.createDropdown(x,y);
  // }

  function confirmSelection(user){
    PHOTOPROCESSOR.model.confirmTagBox(user);
  }

  return {
    init: init,
    setBox: setBox,
    // setDropdown: setDropdown,
    confirmSelection: confirmSelection
  };
})(PHOTOPROCESSOR.model, PHOTOPROCESSOR.view, $);

$(document).ready(function(){
  PHOTOPROCESSOR.controller.init();
});
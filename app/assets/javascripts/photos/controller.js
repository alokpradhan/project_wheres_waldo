var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.controller = (function(model, view, $){

  function init() {
    // console.log(view);
    PHOTOPROCESSOR.view.init(PHOTOPROCESSOR.model.getUsers());
  }

  function setBox(x,y){
    PHOTOPROCESSOR.model.createTagBox(x,y);
  }

  function confirmSelection(user){
    PHOTOPROCESSOR.model.confirmTagBox(user);
    displayConfirmedBoxes();
  }

  function displayConfirmedBoxes() {
    PHOTOPROCESSOR.model.getPromise().done(function(){
      console.log(PHOTOPROCESSOR.model.getTagBoxes());    
      PHOTOPROCESSOR.view.renderConfirmedBoxes(
        PHOTOPROCESSOR.model.getTagBoxes());
    })
  }

  return {
    init: init,
    setBox: setBox,
    confirmSelection: confirmSelection,
    displayConfirmedBoxes: displayConfirmedBoxes
  };
})(PHOTOPROCESSOR.model, PHOTOPROCESSOR.view, $);

$(document).ready(function(){
  PHOTOPROCESSOR.controller.init();
});
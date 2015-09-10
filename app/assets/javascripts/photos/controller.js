var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.controller = (function(){

  function init() {
    sendUserListToView();
  }

  function sendUserListToView(){
    PHOTOPROCESSOR.model.getUserPromise().done(function(){
      PHOTOPROCESSOR.view.init(PHOTOPROCESSOR.model.getUsers());
    });
  }

  function setBox(x,y){
    PHOTOPROCESSOR.model.createTagBox(x,y);
  }

  function confirmSelection(user){
    PHOTOPROCESSOR.model.confirmTagBox(user);
    displayConfirmedBoxes();
  }

  function displayConfirmedBoxes() {
    PHOTOPROCESSOR.model.getTagPromise().done(function(){
      PHOTOPROCESSOR.view.renderConfirmedBoxes(
        PHOTOPROCESSOR.model.getTagBoxes());
    });
  }

  return {
    init: init,
    setBox: setBox,
    confirmSelection: confirmSelection,
    displayConfirmedBoxes: displayConfirmedBoxes
  };
})();

$(document).ready(function(){
  PHOTOPROCESSOR.controller.init();
});
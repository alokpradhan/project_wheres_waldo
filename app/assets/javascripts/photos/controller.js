var PHOTOPROCESSOR = PHOTOPROCESSOR || {}

PHOTOPROCESSOR.controller = (function(model, view, $){

  function init() {
    view.init();
  }

  return {
    init: init
  }
})(PHOTOPROCESSOR.model, PHOTOPROCESSOR.view, $);

$(document).ready(function(){
  PHOTOPROCESSOR.controller.init();
})
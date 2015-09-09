var PHOTOPROCESSOR = PHOTOPROCESSOR || {}

PHOTOPROCESSOR.model = (function(){

})();


PHOTOPROCESSOR.targetingBox = function(pos, size){
  this.pos = pos;
  this.size = size;
  this.active = true;

  this.lock = function() {
    this.active = false;
  } 
};

PHOTOPROCESSOR.dropDown =function(pos, user) {
  this.pos = pos;
  this.user = 
};
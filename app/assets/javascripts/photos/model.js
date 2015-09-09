var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.model = (function(){

var tagBoxes = [];
var dropDowns = [];

var createTagBox = function(x,y){
  if(tagBoxes[tagBoxes.length-1].active === false) {
    var newBox = new PHOTOPROCESSOR.targetingBox(x,y);
    tagBoxes.push(newBox);
  }
};

var createDropdown = function(x,y){
  var newDropDown = new PHOTOPROCESSOR.dropdown(x,y);
  dropDowns.push(newBox);
};

var setTagBox = function(){
  currentBox = tagBoxes[tagBoxes.length-1];
  currentBox.lock();
};

var resetTagBox = function(){
  tagBoxes.splice(tagBoxes.length-1, 1);
  createTagBox();
};

var setDropdown = function(){
  currentDropdown = dropDowns[tagDropdownes.length-1];
  currentDropdown.lock();
};


})();

PHOTOPROCESSOR.targetingBox = function(x,y, size){
  this.posX = x;
  this.posY = y;
  this.size = 50;
  this.active = true;

  this.lock = function() {
    this.active = this.active ? false : true;
  };
};

PHOTOPROCESSOR.dropDown =function(x,y) {
  this.posX = x;
  this.posY = y;
  // Every dropdown has a user when locked
  this.user = '';
  this.active = true;

  this.lock = function() {
    this.active = false;
  };

};
var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.model = (function(){

var tagBoxes = [];
var dropdowns = [];
var users = [ 'Waldo', 'Wenda', 'Odlaw',
              'Wima', 'Wizard Whitebeard', 'Ulf'
            ];

var createTagBox = function(x,y){
  // if(tagBoxes[tagBoxes.length-1].active === false) {
    var newBox = new PHOTOPROCESSOR.targetingBox(x,y);
    tagBoxes.push(newBox);
  // }
};

var createDropdown = function(x,y){
  var newDropdown = new PHOTOPROCESSOR.dropdown(x,y);
  dropdowns.push(newDropdown);
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
  currentDropdown = dropdowns[tagDropdownes.length-1];
  currentDropdown.lock();
};

var getUsers = function(){
  return users;
};

return {
  createTagBox: createTagBox,
  createDropdown: createDropdown,
  getUsers: getUsers
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

PHOTOPROCESSOR.dropdown = function(x,y) {
  this.posX = x;
  this.posY = y;
  // Every dropdown has a user when locked
  this.user = '';
  this.active = true;

  this.lock = function() {
    this.active = false;
  };

};
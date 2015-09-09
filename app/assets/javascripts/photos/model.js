var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.model = (function(){

var tagBoxes = [];
var activeTagBox = '';
var dropdowns = [];
var activeDropdown = '';

var users = [ 'Waldo', 'Wenda', 'Odlaw',
              'Wima', 'Wizard Whitebeard', 'Ulf'
            ];

var createTagBox = function(x,y){
  activeTagBox = new PHOTOPROCESSOR.targetingBox(x,y);
};

// var createDropdown = function(x,y){
//   activeDropdown = new PHOTOPROCESSOR.dropdown(x,y);
// };

var confirmTagBox = function(user){
  activeTagBox.lock();
  setUserForConfirmedBox(user);
  tagBoxes.push(activeTagBox);
  console.log(tagBoxes);
};

// var confirmDropdown = function(){
//   activeDropdown.lock();
//   dropdowns.push(activeDropdown);
// };

var getUsers = function(){
  return users;
};

var setUserForConfirmedBox = function(user){
  activeTagBox.user = user;
};

return {
  createTagBox: createTagBox,
  // createDropdown: createDropdown,
  confirmTagBox: confirmTagBox,
  // confirmDropdown: confirmDropdown,
  getUsers: getUsers
};

})();

PHOTOPROCESSOR.targetingBox = function(x,y,size){
  this.posX = x;
  this.posY = y;
  this.size = 100;
  this.active = true;
  // Every dropdown has a user when locked
  this.user = '';

  this.lock = function() {
    this.active = this.active ? false : true;
  };

};

PHOTOPROCESSOR.dropdown = function(x,y) {
  this.posX = x;
  this.posY = y;
  this.active = true;

  this.lock = function() {
    this.active = false;
  };

};
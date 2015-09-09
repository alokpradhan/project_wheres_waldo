var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.model = (function(){

var tagBoxes = [];
var activeTagBox = '';

var users = [ 'Waldo', 'Wenda', 'Odlaw',
              'Wima', 'Wizard Whitebeard', 'Ulf'
            ];

var createTagBox = function(x,y){
  activeTagBox = new PHOTOPROCESSOR.targetingBox(x,y);
};

var confirmTagBox = function(user){
  activeTagBox.lock();
  setUserForConfirmedBox(user);
  tagBoxes.push(activeTagBox);
  console.log(tagBoxes);
};

var getUsers = function(){
  return users;
};

var getTagBoxes = function(){
  return tagBoxes;
};

var setUserForConfirmedBox = function(user){
  activeTagBox.user = user;
};

return {
  createTagBox: createTagBox,
  confirmTagBox: confirmTagBox,
  getUsers: getUsers,
  getTagBoxes: getTagBoxes
};

})();

PHOTOPROCESSOR.targetingBox = function(x,y,size){
  this.posX = x;
  this.posY = y;
  this.size = 100;
  this.active = true;
  // Every box has a user when locked
  this.user = '';

  this.lock = function() {
    this.active = this.active ? false : true;
  };
};
var PHOTOPROCESSOR = PHOTOPROCESSOR || {};

PHOTOPROCESSOR.model = (function(){

var tagBoxes = [];
var activeTagBox = '';
var users = [];

var createTagBox = function(x,y){
  activeTagBox = new PHOTOPROCESSOR.targetingBox(x,y);
};

var confirmTagBox = function(user){
  activeTagBox.lock();
  setUserForConfirmedBox(user);
  // setTagsFromBackend
  setTags(activeTagBox);
};

var getUsers = function(){
  return users;
};

var getUserPromise = function(){
  var userPromise = getUserList();
  return userPromise;
};

var getTagBoxes = function(){
  return tagBoxes;
};

var getTagPromise = function(){
  var myPromise = getTags();
  return myPromise;
};

var setUserForConfirmedBox = function(user){
  activeTagBox.user = users.indexOf(user);
};

// AJAX request to get Tags
function getTags() {
  return $.ajax({
    url: 'tags',
    method: 'get',
    dataType: 'json',
    success: function(json) {
      tagBoxes = json;
    }
  }).promise();
}

// AJAX request to post new Tags
function setTags(box) {
  $.ajax({
    url: 'tags',
    method: 'post',
    data: JSON.stringify({positionX: box.posX, positionY: box.posY, user_id: box.user}),
    dataType: 'json',
    contentType: 'application/json',
    success: function() {
      console.log( 'sucess' );
      getTags();
    }
  });
}

// AJAX request to get Users
function getUserList() {
  return $.ajax({
    url: 'users',
    method: 'get',
    dataType: 'json',
    success: function(json) {
      // console.log(json);
      users = json;
    }
  }).promise();
}

return {
  createTagBox: createTagBox,
  confirmTagBox: confirmTagBox,
  getUsers: getUsers,
  getUserPromise: getUserPromise,
  getTagBoxes: getTagBoxes,
  getTagPromise: getTagPromise
};

})();


// Constructor for targeting box
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
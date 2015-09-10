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
  // tagBoxes.push(activeTagBox);  // setTagsFromBackend
  setTags(activeTagBox);

  console.log(tagBoxes);
};

var getUsers = function(){   // getUsersFromBackend
  return users;
};

var getTagBoxes = function(){
  return tagBoxes;
};

var getPromise = function(){    // getTagsFromBackend
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
      // console.log(json);
      tagBoxes = json;
    }
  }).promise();
}

// AJAX requests
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

return {
  createTagBox: createTagBox,
  confirmTagBox: confirmTagBox,
  getUsers: getUsers,
  getTagBoxes: getTagBoxes,
  getPromise: getPromise
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
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
  tagBoxes.push(activeTagBox);  // setTagsFromBackend
  console.log(tagBoxes);
};

var getUsers = function(){   // getUsersFromBackend
  return users;
};

var getTagBoxes = function(){    // getTagsFromBackend
  getTags();
  return tagBoxes;
};

var setUserForConfirmedBox = function(user){
  activeTagBox.user = user;
};

// AJAX request to get Tags
function getTags() {
  $.ajax({
    url: 'tags',
    method: 'get',
    dataType: 'json',
    complete: function(json) {
      // console.log(json);
      tagBoxes = json;
    }
  });
}

return {
  createTagBox: createTagBox,
  confirmTagBox: confirmTagBox,
  getUsers: getUsers,
  getTagBoxes: getTagBoxes
};

})();


// AJAX requests
function setTags(x, y, user_id) {
  $.ajax({
    url: 'tags',
    method: 'post',
    data: JSON.stringify({positionX: x, positionY: y, user_id: user_id}),
    dataType: 'json',
    contentType: 'application/json',
    success: function() {
      console.log( 'sucess' );
      getTags();
    }
  });
}


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
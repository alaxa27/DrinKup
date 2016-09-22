angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    description: 'You on your way?',
    pic: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    description: 'Hey, it\'s me',
    pic: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    description: 'I should buy a boat',
    pic: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    description: 'Look at my mukluks!',
    pic: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    description: 'This is wicked good ice cream.',
    pic: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

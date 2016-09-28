drinkup.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    display: true,
    name: 'Ben Sparrow',
    category: 2,
    description: 'You on your way?',
    pack: false,
    pic: 'img/ben.png',
    price: 20
  }, {
    id: 1,
    display: true,
    name: 'Max Lyn',
    category: 2,
    description: 'Hey, it\'s me',
    pack: false,
    pic: 'img/max.png',
    price: 15
  }, {
    id: 2,
    display: true,
    name: 'Adam Bradleyson',
    category: 2,
    description: 'I should buy a boat',
    pack: false,
    pic: 'img/adam.jpg',
    price: 15
  }, {
    id: 3,
    display: true,
    name: 'Perry Governor',
    category: 1,
    description: 'Look at my mukluks!',
    pack: false,
    pic: 'img/perry.png',
    price: 15
  }, {
    id: 4,
    display: true,
    name: 'Mike Harrington',
    category: 1,
    description: 'This is wicked good ice cream.',
    pack: false,
    pic: 'img/mike.png',
    price: 15
  }, {
    id: 5,
    display: true,
    name: 'TekPaf',
    category: 0,
    description: 'Tequila+Lemon+Salt',
    pack: [{
        id : 0,
        name: 'S',
        description: 'Small',
        price: 12,
        products: [{
          id: 0,
          quantity: 2
        }, {
          id: 1,
          quantity: 1
        }]
      }, {
        id : 1,
        name: 'L',
        description: 'Large',
        price: 15,
        products: [{
          id: 0,
          quantity: 2
        }, {
          id: 1,
          quantity: 3
        }]
      }],
    pic: 'img/tekpaf.jpg'
  }]

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
})

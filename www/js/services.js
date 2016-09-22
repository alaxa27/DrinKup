angular.module('starter.services', [])
.factory('Panier', function() {
  panier = [];
  return {
    all: function() {
      return panier;
    },
    get_number: function (produitID) {
      for (var i = 0; i < panier.length; i++) {
        if (panier[i].id === produitID) {
          return panier[i].number;
        }
      }
      return 0;
    },
    add_to_panier: function(produitID) {
      for (var i = 0; i < panier.length; i++) {
        if(panier[i].id === produitID){
          panier[i].number++;
          return 1;
        }
      }
      var prod = '{"id" : ' + produitID + ', "number" : 1 }';
      panier.push(JSON.parse(prod));
      return null;
    },
    remove_from_panier: function(produitID) {
      for (var i = 0; i < panier.length; i++) {
        if(panier[i].id === produitID) {
          if (panier[i].number > 0) {
            panier[i].number--;
            if (panier[i].number === 0) {
              panier.splice(i, 1);
            }
          return 1;
          } else {
            panier.splice(i, 1);
          }
        }
      }
      return null;
   }
 };
})

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

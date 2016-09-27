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
      var prod = '{"id" : ' + produitID + ', "number" : 1, "size" : 0}';
      panier.push(JSON.parse(prod));
      return null;
    },
    push_to_panier: function(produitID, obj) {
      for (var i = 0; i < panier.length; i++) {
        if(panier[i].id === produitID) {
          panier[i].size = obj;
        }
      }
    },
    get_panier: function (produitID) {
      for (var i = 0; i < panier.length; i++) {
        if(panier[i].id === produitID) {
          return panier[i];
        }
      }
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

.factory('Categories', function() {
  var categories = [{
    id: 0,
    name: 'Packs',
    prods: [5]
  }, {
    id: 1,
    name:'Alcools',
    prods: [3, 4]
  }, {
    id: 2,
    name: 'Fumette',
    prods: [0, 1, 2]
  }]

  return {
    all: function() {
      return categories;
    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    display: true,
    name: 'Ben Sparrow',
    category: 2,
    description: 'You on your way?',
    pack: false,
    pic: 'img/ben.png'
  }, {
    id: 1,
    display: true,
    name: 'Max Lyn',
    category: 2,
    description: 'Hey, it\'s me',
    pack: false,
    pic: 'img/max.png'
  }, {
    id: 2,
    display: true,
    name: 'Adam Bradleyson',
    category: 2,
    description: 'I should buy a boat',
    pack: false,
    pic: 'img/adam.jpg'
  }, {
    id: 3,
    display: true,
    name: 'Perry Governor',
    category: 1,
    description: 'Look at my mukluks!',
    pack: false,
    pic: 'img/perry.png'
  }, {
    id: 4,
    display: true,
    name: 'Mike Harrington',
    category: 1,
    description: 'This is wicked good ice cream.',
    pack: false,
    pic: 'img/mike.png'
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
});

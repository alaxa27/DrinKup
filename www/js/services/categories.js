drinkup.factory('Categories', function() {
  var categories = [{
    id: 0,
    name: 'Packs',
    prods: [5]
  }, {
    id: 1,
    name:'Alcools',
    prods: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  }, {
    id: 2,
    name: 'Fumette',
    prods: [1, 2]
  }]

  return {
    all: function() {
      return categories;
    }
  }
})

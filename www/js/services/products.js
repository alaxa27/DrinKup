drinkup.factory('Products', function () {
  var products = [{
    id: 0,
    display: true,
    name: "Poliakov",
    category: 1,
    pic: "img/poliakov_70cL.jpg",
    options: [{
      id: 0,
      quantity: 0,
      description: "Volume: 70cL",
      price: 15
    }, {
      id: 1,
      quantity: 0,
      description: "Volume: 1L",
      price: 20
    }, {
      id: 2,
      quantity: 0,
      description: "Volume: 2L",
      price: 25
    }]
  }, {
    id: 1,
    display: true,
    name: "Jack Daniel\'s",
    category: 1,
    pic: "img/jack_daniels_70cL.jpg",
    options: [{
      id: 0,
      quantity: 0,
      description: "Volume: 70cL",
      price: 17
    }, {
      id: 1,
      quantity: 0,
      description: "Volume: 1L",
      price: 22
    }, {
      id: 2,
      quantity: 0,
      description: "Volume: 2L",
      price: 30
    }]
  }];

  return {
    all: function () {
      return products;
    }
  };
});

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
        description: "Volume: 70cL, 40% Vol.",
        price: 15
      }, {
        id: 1,
        quantity: 0,
        description: "Volume: 1L, 40% Vol.",
        price: 20
      }, {
        id: 2,
        quantity: 0,
        description: "Volume: 2L, 40% Vol.",
        price: 25
      }]
  }, {
    id: 1,
    display: true,
    name: "Eristoff",
    category: 1,
    pic: "img/eristoff_70cL.jpg",
    options: [{
      id: 0,
      quandtity: 0,
      description: "Volume: 70cL, 40% Vol.",
      price: 17
    }, {
      id: 1,
      quantity: 0,
      description: "Volume: 1L, 40% Vol.",
      price: 25
    }, {
      id: 2,
      quantity: 0,
      description: "Volume 2L, 40% Vol.",
      price: 30
    }]
  }, {
    id: 2,
    display: true,
    name: "Jack Daniel\'s",
    category: 1,
    pic: "img/jack_daniels_70cL.jpg",
    options: [{
      id: 0,
      quantity: 0,
      description: "Volume: 70cL, 40% Vol.",
      price: 17
    }, {
      id: 1,
      quantity: 0,
      description: "Volume: 1L, 40% Vol.",
      price: 22
    }, {
      id: 2,
      quantity: 0,
      description: "Volume: 2L, 40%, Vol.",
      price: 30
    }]
  }, {
      id: 3,
      display: true,
      name: "Ballantine\'s",
      category: 1,
      pic: "img/ballantines_70cL.jpg",
      options: [{
        id: 0,
        quandtity: 0,
        description: "Volume: 70cL, 40% Vol.",
        price: 17
      }, {
        id: 1,
        quantity: 0,
        description: "Volume: 1L, 40% vol.",
        price: 25
      }, {
        id: 2,
        quantity: 0,
        description: "Volume: 2L, 40% Vol.",
        price: 30
      }]
    }, {
      id: 4,
      display: true,
      name: "Tequila San José",
      category: 1,
      pic: "img/tequila_san_jose_70cL.jpg",
      options: [{
        id: 0,
        quandtity: 0,
        description: "Volume: 70cL, 35% Vol.",
        price: 17
      }, {
        id: 1,
        quantity: 0,
        description: "Volume: 1L, 35% vol.",
        price: 25
      }, {
        id: 2,
        quantity: 0,
        description: "Volume: 2L, 35% Vol.",
        price: 30
      }]
    }, {
    id: 5,
    display: true,
    name: "Rhum blanc Saint James",
    category: 1,
    pic: "img/rhum_blanc_saint_james_70cL.jpg",
    options: [{
      id: 0,
      quandtity: 0,
      description: "Volume: 70cL, 40% Vol.",
      price: 17
    }, {
      id: 1,
      quantity: 0,
      description: "Volume: 1L, 40% Vol.",
      price: 25
    }, {
      id: 2,
      quantity: 0,
      description: "Volume: 2L, 40% Vol.",
      price: 30
    }]
  }, {
    id: 6,
    display: true,
    name: "Fruits and Wine by Moncigale Pamplemousse",
    category: 1,
    pic: "img/fruits_and_wine_by_moncigale_pamplemousse_70cL.jpg",
    options: [{
      id: 0,
      quandtity: 0,
      description: "Volume: 75 cL, 7% Vol.",
      price: 5
    }]
  }, {
    id: 7,
    display: true,
    name: "Fruits and Wine by Moncigale Pêche",
    category: 1,
    pic: "img/fruits_and_wine_by_moncigale_peche_70cL.jpg",
    options: [{
      id: 0,
      quandtity: 0,
      description: "Volume: 75 cL, 7% Vol.",
      price: 5
    }]
  }, {
    id: 8,
    display: true,
    name: "Bières",
    category: 1,
    pic: "",
    options: [{
      id: 0,
      quandtity: 0,
      description: "",
      price: 20
    }, {
      id: 1,
      quantity: 0,
      description: "",
      price: 20
    }, {
      id: 2,
      quantity: 0,
      description: "",
      price: 20
  }]
}]


  return {
    all: function () {
      return products;
    }
  };
});

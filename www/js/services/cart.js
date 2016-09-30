drinkup.factory('Cart', function () {
  cart = [];
  return {
    all: function () {
      return cart;
    },
    calc_total: function () {
      var total = 0;
      for (var i = 0; i < cart.length; i++) {
        for (var j = 0; j < cart[i].items.length; j++) {
          total += cart[i].items[j].price * cart[i].items[j].quantity;
        }
      }
      return total;
    },
    push_to_cart: function (product, item) {
      for (var i=0; i < cart.length; i++) {
        if (cart[i].product === product) {
          for (var j = 0; j < cart[i].items.length; j++) {
            if (cart[i].items[j] === item) {
                cart[i].items[j].quantity++;
                return true;
            }
          }
          item.quantity = 1;
          cart[i].items.push(item);
          return true;
        }
      }
      item.quantity = 1;
      var val = {"product": product, "items": [item]};
      cart.push(val);
      return true;
    }
  };
})

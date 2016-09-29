drinkup.factory('Panier', function() {
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
      var prod = '{"id" : ' + produitID + ', "number" : 1, "size" : -1}';
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
    total: function (products) {
      var total = 0;
      for (var i = 0; i < panier.length; i++) {
        if (panier[i].size != -1) {
          total += products[panier[i].id].pack[panier[i].size].price * panier[i].number;
        } else {
          total += products[panier[i].id].price * panier[i].number;
        }
      }
      return total;
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

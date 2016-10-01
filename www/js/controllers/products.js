drinkup.controller('ProductsCtrl', function($scope, $state, $ionicModal, Products, Cart, Categories, ModalProducts, ModalCart) {
  $scope.categories = Categories.all();
  $scope.products = Products.all();

  $scope.calc_total = function () {
    return Cart.calc_total();
  }

  //Modals
  $scope.modal_products = function(ID) {
    ModalProducts
      .init('templates/modal-products.html', $scope, ID)
      .then(function(modal) {
        modal.show();
      });
  };
  $ionicModal.fromTemplateUrl('templates/modal-products.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.modal_cart = function() {
    ModalCart
      .init('templates/modal-cart.html', $scope)
      .then(function(modal) {
        modal.show();
      });
  };
  $ionicModal.fromTemplateUrl('templates/modal-cart.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
})








  // $scope.categories = Categories.all();
  // $scope.panier = Panier.all();
  // $scope.products = Chats.all();
  //
  // $scope.get_number = function(ID) {
  //   return Panier.get_number(ID);
  // };
  //
  // $scope.add_to_panier = function (ID) {
  //   Panier.add_to_panier(ID);
  // };
  //
  // $scope.remove_from_panier = function (ID) {
  //   Panier.remove_from_panier(ID);
  // };
  //
  // $scope.push_to_panier = function (ID, obj) {
  //   Panier.push_to_panier(ID, obj);
  //
  // };
  //
  // $scope.modal_products = function(ID) {
  //   ModalProducts
  //     .init('templates/modal-products.html', $scope, ID)
  //     .then(function(modal) {
  //       modal.show();
  //     });
  // };
  // $ionicModal.fromTemplateUrl('templates/modal-products.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });
  //
  // $scope.show_modal = function (ID) {
  //   $scope.modal.show();
  //   $scope.modal.scope.product = $scope.products[ID];
  //   $scope.modal.scope.products = $scope.products;
  //   $scope.modal.scope.on_swipe_down = function () {
  //     $scope.modal.hide();
  //   };
  //
  //   $scope.modal.scope.add_to_panier = function (ID) {
  //     Panier.add_to_panier(ID);
  //     $scope.modal.scope.pack_size = Panier.get_panier(ID).size;
  //   };
  //
  //   $scope.modal.scope.remove_from_panier = function (ID) {
  //     Panier.remove_from_panier(ID);
  //   };
  //
  //   $scope.modal.scope.push_to_panier = function (ID, obj) {
  //     Panier.push_to_panier(ID, obj);
  //
  //   };
  //
  //   $scope.modal.scope.get_number = function(ID) {
  //     return Panier.get_number(ID);
  //   };
  //
  // }

  /*$scope.createContact = function(u) {
    $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
    $scope.modal.hide();
  };*/

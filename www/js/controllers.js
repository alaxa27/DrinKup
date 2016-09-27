angular.module('starter.controllers', [])

.controller('ProductsCtrl', function($scope, $state, $ionicModal, Chats, Panier, Categories) {
  $scope.categories = Categories.all();
  $scope.panier = Panier.all();
  $scope.products = Chats.all();

  $scope.get_number = function(ID) {
    return Panier.get_number(ID);
  };

  $scope.add_to_panier = function (ID) {
    Panier.add_to_panier(ID);
  };

  $scope.remove_from_panier = function (ID) {
    Panier.remove_from_panier(ID);
  };

  $ionicModal.fromTemplateUrl('templates/modal-products.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.show_modal = function (ID) {
    $scope.modal.show();
    $scope.modal.scope.product = $scope.products[ID];
    $scope.modal.scope.products = $scope.products;
    $scope.modal.scope.on_swipe_down = function () {
      $scope.modal.hide();
    };

    $scope.modal.scope.add_to_panier = function (ID) {
      Panier.add_to_panier(ID);
      $scope.modal.scope.pack_size = Panier.get_panier(ID).size;
    };

    $scope.modal.scope.remove_from_panier = function (ID) {
      Panier.remove_from_panier(ID);
    };

    $scope.modal.scope.push_to_panier = function (ID, obj) {
      Panier.push_to_panier(ID, obj);

    };

    $scope.modal.scope.get_number = function(ID) {
      return Panier.get_number(ID);
    };

  }

  /*$scope.createContact = function(u) {
    $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
    $scope.modal.hide();
  };*/

})

.controller('PanierCtrl', function($scope, $ionicModal, Panier, Chats) {
  $scope.panier = Panier.all();
  $scope.products = Chats.all();
  $scope.get_product = function (ID) {
    return Chats.get(ID)
  }
  $scope.get_number = function(ID) {
    return Panier.get_number(ID);
  };
  $scope.add_to_panier = function (ID) {
    Panier.add_to_panier(ID);
  };
  $scope.remove_from_panier = function (ID) {
    Panier.remove_from_panier(ID);
  };
  for (var i; i < panier.length; i++) {

  }

  $ionicModal.fromTemplateUrl('templates/modal-products.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.show_modal = function (ID) {
    $scope.modal.show();
    $scope.modal.scope.products = $scope.products;
    $scope.modal.scope.product = $scope.products[ID];

    $scope.modal.scope.on_swipe_down = function () {
      $scope.modal.hide();
    };

    $scope.modal.scope.add_to_panier = function (ID) {
      Panier.add_to_panier(ID);
    };

    $scope.modal.scope.pack_size = Panier.get_panier(ID).size;

    $scope.modal.scope.remove_from_panier = function (ID) {
      Panier.remove_from_panier(ID);
    };

    $scope.modal.scope.push_to_panier = function (ID, obj) {
      Panier.push_to_panier(ID, obj);

    };

    $scope.modal.scope.get_number = function(ID) {
      return Panier.get_number(ID);
    };
  }
})

.controller('HomeCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
  $scope.startApp = function() {
    $state.go('tab.products');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.products = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

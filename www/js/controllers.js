angular.module('starter.controllers', [])

.controller('ProductsCtrl', function($scope, Chats, Panier) {
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

})

.controller('PanierCtrl', function($scope, Panier, Chats) {
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
})

.controller('HomeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
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

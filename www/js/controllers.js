angular.module('starter.controllers', [])

.controller('ProductsCtrl', function($scope, Chats) {
  $scope.panier = [];
  $scope.products = Chats.all();
  $scope.get_number = function(produitID) {
    for (var i = 0; i < $scope.panier.length; i++) {
      if ($scope.panier[i].id === produitID) {
        return $scope.panier[i].number;
      }
    }
    return 0;
  };

  $scope.add_to_panier = function(produitID) {
    for (var i = 0; i < $scope.panier.length; i++) {
      if($scope.panier[i].id === produitID){
        $scope.panier[i].number++;
        return 1;
      }
    }
    var prod = '{"id" : ' + produitID + ', "number" : 1 }';
    $scope.panier.push(JSON.parse(prod));
    return null;
  };

  $scope.remove_from_panier = function(produitID) {
    for (var i = 0; i < $scope.panier.length; i++) {
      if($scope.panier[i].id === produitID) {
        if ($scope.panier[i].number > 0) {
        $scope.panier[i].number--;
        return 1;
        }
      } else {
        $scope.panier.splice(i);
      }
    }
    return null;
  };

})

.controller('PanierCtrl', function($scope) {})

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

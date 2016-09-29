drinkup.factory('ModalProducts', function($ionicModal, $rootScope) {
  var init = function(tpl, scope, ID) {
    var promise;
    $scope = scope || $rootScope.$new();
    $scope.product = $scope.products[ID];
    $scope.openModal = function() {
       $scope.modal.show();
     };
     $scope.closeModal = function() {
       $scope.modal.hide();
     };
     $scope.$on('$destroy', function() {
       $scope.modal.remove();
     });
    //  $scope.modal.product = $scope.products[ID];
    //  $scope.modal.products = $scope.products;
    $scope.on_swipe_down = function () {
      $scope.modal.hide();
    };
     //
    //  $scope.modal.add_to_panier = function (ID) {
    //    Panier.add_to_panier(ID);
    //    $scope.modal.pack_size = Panier.get_panier(ID).size;
    //  };
     //
    //  $scope.modal.remove_from_panier = function (ID) {
    //    Panier.remove_from_panier(ID);
    //  };
     //
    //  $scope.modal.scope.push_to_panier = function (ID, obj) {
    //    Panier.push_to_panier(ID, obj);
    //
    //  };
     //
    //  $scope.modal.get_number = function(ID) {
    //    return Panier.get_number(ID);
    //  };

     promise = $ionicModal.fromTemplateUrl(tpl, {
       scope: $scope,
       animation: 'slide-in-up'
     }).then(function(modal) {
       $scope.modal = modal;
       return modal;
     });

    return promise;
  }

  return {
    init: init
  }

})

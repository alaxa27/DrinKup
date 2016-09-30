drinkup.factory('ModalProducts', function($ionicModal, $rootScope, Cart) {
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
    $scope.on_swipe_down = function () {
      $scope.modal.hide();
    };

    $scope.push_to_cart = function (product, item) {
      Cart.push_to_cart(product, item);
      $scope.modal.hide();
    };

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

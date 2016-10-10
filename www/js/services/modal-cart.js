drinkup.factory('ModalCart', function($ionicModal, $state, $rootScope, Cart) {
  var init = function(tpl, scope) {
    var promise;
    $scope = scope || $rootScope.$new();
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

    $scope.command = function () {
      $state.go("test-position");
      $scope.modal.hide();
    }

    $scope.cart = Cart.all();
    $scope.calc_total = function () {
      return Cart.calc_total();
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

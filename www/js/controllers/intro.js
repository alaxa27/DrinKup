drinkup.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, $ionicAuth, $ionicUser) {

  // Called to navigate to the main app
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

  $scope.facebook_login = function () {
    $ionicAuth.login('facebook');
  };
});

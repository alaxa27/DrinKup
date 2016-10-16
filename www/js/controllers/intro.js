drinkup.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, $FacebookAuth, $ionicUser) {
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('tab.events');
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

  $scope.logged_in = function() {
    if (window.localStorage.getItem("logged_in")){
      return true;
    } else {
      return false;
    }
  }

  $scope.facebook_login = function () {
    $FacebookAuth.login().then(function(){
      window.localStorage.setItem("logged_in", "true");
    });
  };
});

drinkup.controller('TestPositionCtrl', function($scope, $cordovaGeolocation, $ionicPopup, $ionicLoading) {

  GPS_alert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'GPS Error!',
      template: 'Activez le positionnement.'
    });
    alertPopup.then(function(res) {
      console.log('error gps alert');
    });
  };

  show_loading = function() {
    $ionicLoading.show({
      template: '<ion-spinner class="bubbles"></ion-spinner>'
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  };

  hide_loading = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };

  $scope.data = {
    "address": ""
  };
  $scope.time = ""

  $scope.test_position = function () {
    show_loading();
    navigator.geolocation
      .getCurrentPosition(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        $scope.lat = lat;
        $scope.long = long;
        google_matrix_calculation(lat + ', ' + long);
      }, function(err) {
        hide_loading();
        GPS_alert();
      }, {
       maximumAge: 3000,
       timeout: 5000,
       enableHighAccuracy: true
      });
  }

  $scope.test_address = function () {
    show_loading();
    google_matrix_calculation($scope.data.address);
  }

  var google_matrix_calculation = function (position) {

    var bounds = new google.maps.LatLngBounds;
    var markersArray = [];

    var origin = '16 rue le nostre, 76000';
    var destinationA = position;

    var geocoder = new google.maps.Geocoder;

    var service = new google.maps.DistanceMatrixService;
    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destinationA],
      travelMode: 'BICYCLING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: true,
      avoidTolls: true
    }, function(response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
        hide_loading();
      } else {
        if (response.rows[0].elements[0].status === 'OK') {
          $scope.time = response.rows[0].elements[0].duration.text.toString();
        }
        hide_loading();
      }
    });
  }

  function initialize() {
    var input = document.getElementById('search-bar');
    var autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      console.log("here");
      $scope.data.address = this.getPlace();
    });
  }


  google.maps.event.addDomListener(window, 'load', initialize);
})

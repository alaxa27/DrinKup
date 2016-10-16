drinkup.controller('TestPositionCtrl', function($scope, $cordovaGeolocation, $ionicPopup, $ionicLoading) {

  GPS_alert = function(err) {
    var alertPopup = $ionicPopup.alert({
      title: 'GPS Error!',
      template: err.message
      // template: 'Activez le positionnement.'
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

  $scope.find_position = function () {
    cordova.plugins.diagnostic.isLocationAvailable(function(available){
      if(!available) {
        cordova.plugins.diagnostic.switchToLocationSettings();
      }
      if(available) {
        show_loading();
        navigator.geolocation
          .getCurrentPosition(function (position) {
            var lat  = position.coords.latitude;
            var long = position.coords.longitude;
            $scope.data.address = lat + ', ' + long;
            hide_loading();
            // var geocoder = new google.maps.Geocoder;
            // var latLng = new google.maps.LatLng(lat, long);
            // geocoder.geocode({'location': latLng}, function(results, status){
            //   if (status === google.maps.GeocoderStatus.OK){
            //     if (results[1]) {
            //       $scope.data.address = results[1].formatted_address;
            //     } else {
            //       $scope.data.address = lat + ', ' + long;
            //     }
            //   } else {
            //     GPS_alert('Error: ' + status);
            //   }
            //   hide_loading();
            // });
          }, function(err) {
            hide_loading();
            GPS_alert(err);
          }, {
           maximumAge: 20000,
           timeout: 12000,
           enableHighAccuracy: false
          });
      } else {
        GPS_alert({message: "Activez le positionnement."})
      }
    }, function(error){
        console.error("The following error occurred: "+error);
    });
  }

  $scope.test = function () {
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
        console.log('Error was: ' + status);
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
    autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      $scope.data.address = this.getPlace();
    });
  }


  google.maps.event.addDomListener(window, 'load', initialize);
})

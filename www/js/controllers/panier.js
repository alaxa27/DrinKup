drinkup.controller('PanierCtrl', function($scope, $ionicModal, Panier, Chats, StripeCharge) {

  $scope.ProductMeta = {
    title: "Commande",
    description: "Payes et on arrive!",
    priceUSD: Panier.total(),
  };

  $scope.status = {
    loading: false,
    message: "",
  };

  $scope.charge = function() {

    $scope.status['loading'] = true;
    $scope.status['message'] = "Retrieving your Stripe Token...";

    // first get the Stripe token
    StripeCharge.getStripeToken($scope.ProductMeta).then(
      function(stripeToken){
        // -->
        proceedCharge(stripeToken);
      },
      function(error){
        console.log(error)

        $scope.status['loading'] = false;
        if(error != "ERROR_CANCEL") {
          $scope.status['message'] = "Oops... something went wrong";
        } else {
          $scope.status['message'] = "";
        }
      }
    ); // ./ getStripeToken

    function proceedCharge(stripeToken) {

      $scope.status['message'] = "Processing your payment...";

      // then chare the user through your custom node.js server (server-side)
      StripeCharge.chargeUser(stripeToken, $scope.ProductMeta).then(
        function(StripeInvoiceData){

          if(StripeInvoiceData.hasOwnProperty('id')) {
            $scope.status['message'] = "Success! Check your Stripe Account";
          } else {
            $scope.status['message'] = "Error, check your console";
          };
          $scope.status['loading'] = false;
          console.log(StripeInvoiceData)
        },
        function(error){
          console.log(error);

          $scope.status['loading'] = false;
          $scope.status['message'] = "Oops... something went wrong";
        }
      );

    }; // ./ proceedCharge

  };


  $scope.panier = Panier.all();
  $scope.products = Chats.all();
  $scope.total = function() {
    return Panier.total($scope.products);
  }
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

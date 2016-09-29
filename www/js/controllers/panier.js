drinkup.controller('PanierCtrl', function($scope, $ionicModal, Panier, Chats, StripeCharge, ModalProducts) {

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

  $scope.modal_products = function(ID) {
    ModalProducts
      .init('templates/modal-products.html', $scope, ID)
      .then(function(modal) {
        modal.show();
      });
  };
})

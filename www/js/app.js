// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


// Noodlio Pay
// Example with Checkout (Option 2)

// ---------------------------------------------------------------------------------------------------------
// !important settings
// Please fill in the following constants to get the project up and running
// You might need to create an account for some of the constants.

// Obtain your unique Mashape ID from here:
// https://market.mashape.com/noodlio/noodlio-pay-smooth-payments-with-stripe
var NOODLIO_PAY_API_URL         = "https://noodlio-pay.p.mashape.com";
var NOODLIO_PAY_API_KEY         = "ZB0rF7Kf1hmshWDaIiSHUuT6dPlZp1iizwIjsn8UyinybqsRm4";
var NOODLIO_PAY_CHECKOUT_KEY    = {test: "pk_test_QGTo45DJY5kKmsX21RB3Lwvn", live: "pk_live_ZjOCjtf1KBlSHSyjKDDmOGGE"};

// Obtain your unique Stripe Account Id from here:
// https://www.noodl.io/pay/connect
// Please also connect your account on this address
// https://www.noodl.io/pay/connect/test
var STRIPE_ACCOUNT_ID           = "alaxa27";

// Define whether you are in development mode (TEST_MODE: true) or production mode (TEST_MODE: false)
var TEST_MODE = true;




var drinkup = angular.module('starter', ['ionic', 'stripe.checkout', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, StripeCheckoutProvider) {


  // Defines your checkout key
  switch (TEST_MODE) {
    case true:
      //
      StripeCheckoutProvider.defaults({key: NOODLIO_PAY_CHECKOUT_KEY['test']});
      break
    default:
      //
      StripeCheckoutProvider.defaults({key: NOODLIO_PAY_CHECKOUT_KEY['live']});
      break
  };


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $ionicConfigProvider.tabs.position('bottom'); //bottom
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('intro', {
  url: '/',
  templateUrl: 'templates/intro.html',
  controller: 'IntroCtrl'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  /*.state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })*/

  .state('tab.products', {
    url: '/products',
    views: {
      'tab-products': {
        templateUrl: 'templates/tab-products.html',
        controller: 'ProductsCtrl'
      }
    }
  })

  .state('tab.panier', {
      url: '/panier',
      views: {
        'tab-panier': {
          templateUrl: 'templates/tab-panier.html',
          controller: 'PanierCtrl',
          resolve: {
            // checkout.js isn't fetched until this is resolved.
            stripe: StripeCheckoutProvider.load
          }
        }
      }
    })
/*
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
*/
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});

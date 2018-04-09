var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl : 'home.ejs',
      controller : 'homeCtrl'
    })
    
    .when('/office', {
      templateUrl : 'office.ejs',
      controller : 'homeCtrl'
    }) 
    .when('/factory', {
      templateUrl : 'factory.ejs',
      controller : 'homeCtrl'
    }) 
    .when('/orderProcessing', {
      templateUrl : 'orderprocessing.ejs',
      controller : 'homeCtrl'
    })
    .when('/stockdetails', {
      templateUrl : 'stockdetails.ejs',
      controller : 'homeCtrl'
    })
        .when('/orderManagement', {
      templateUrl : 'ordermanagement.ejs',
      controller : 'homeCtrl'
    })   
        .when('/stockManagement', {
      templateUrl : 'stockmanagement.ejs',
      controller : 'homeCtrl'
    })    
            
});


var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    controller:'HomeController',
    templateUrl:'views/wtf.html'
  })
  .otherwise({
    redirectTo:'/'
  });

});

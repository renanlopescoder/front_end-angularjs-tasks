var taskApp = angular.module('taskApp',['ngRoute']);

taskApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
      templateUrl : 'views/task-list.html',
      controller : 'TaskController'
   }).when('/dashboard', {
       templateUrl : 'views/dashboard.html',
       controller : 'TaskController'
    })
   .otherwise ({ redirectTo: '/' });
}]);

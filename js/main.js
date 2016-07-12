var taskApp = angular.module('taskApp',['ngRoute']);

taskApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
      templateUrl : 'task-list.html',
      controller : 'TaskController'
   }).when('/dashboard', {
       templateUrl : 'dashboard.html',
       controller : 'TaskController'
    }).when('/details/:taskId', {
       templateUrl : 'task-detail.html',
       controller : 'TaskController',
       })
   .otherwise ({ redirectTo: '/' });
}]);

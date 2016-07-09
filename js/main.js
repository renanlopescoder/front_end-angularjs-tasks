var taskApp = angular.module('taskApp',['ngRoute']);

taskApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
      templateUrl : 'task-list.html',
      controller : 'TaskController'
   }).when('/new', {
       templateUrl : 'task-form-new.html',
       controller : 'TaskController'
    })
   .otherwise ({ redirectTo: '/' });
}]);

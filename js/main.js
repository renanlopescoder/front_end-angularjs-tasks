var taskApp = angular.module('taskApp',['ngRoute']);

taskApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
  $routeProvider.when('/tasks-list', {
      templateUrl : 'views/task-progress-list.html',
      controller : 'TaskController'
   }).when('/', {
       templateUrl : 'views/task-progress-list.html',
       controller : 'TaskController'
    }).when('/tasks-done', {
       templateUrl : 'views/task-completed-list.html',
       controller : 'TaskController'
    }).when('/about', {
       templateUrl : 'views/about.html',
       controller : 'TaskController'
    })
   .otherwise ({ redirectTo: '/' });
}]);

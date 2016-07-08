var taskApp = angular.module('taskApp',['ngRoute']);

taskApp.config(function($routeProvider){
  $routeProvider.when('/', {
      templateUrl : 'task-list.html',
      controller : 'TaskController',
   })
   .otherwise ({ redirectTo: '/' });
});

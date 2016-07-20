/* global taskApp */

  taskApp.factory('TaskFactory', function(){
    var tasks = [
        {id : '1',description : 'Single Page App with AngularJS',active:'false'},
        {id : '2',description : 'Learn more',active:'false'},
        {id : '3',description : 'Just one more task here',active:'false'}
    ];

    var factory = {};

    factory.getTasks = function(){
      return tasks;
    };

    return factory;
  });

  taskApp.controller('TaskController', function($scope, TaskFactory,$routeParams){
    $scope.tasks = [];
    $scope.id = 4;
    init();

    function init(){
      $scope.tasks = TaskFactory.getTasks();
    }

    $scope.addTask = function(){
      $scope.tasks.push({
        id : $scope.id,
        description : $scope.newTask.description
      });
      $scope.id++;
    };
    $scope.taskActive = function(task,active){
      $scope.tasks[$scope.tasks.indexOf(task)].active = active;
    };
    $scope.saveTask = function(task){
      $scope.tasks[$scope.tasks.indexOf(task)] = {id :  Number(task.id), description: $scope.saveTask.description};
      $scope.saveTask.description = "";
      $scope.active = 'false';
    };
    $scope.clearTask = function(task){
      $scope.tasks[$scope.tasks.indexOf(task)] = {id :  Number(task.id), description: ''};
    };
    $scope.removeTask = function(task) { 
      var index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);     
    };
  });



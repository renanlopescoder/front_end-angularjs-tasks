/* global taskApp */

  taskApp.factory('TaskFactory', function(){
    var id =1;
    var tasks = [
        {id : id++,description : 'Single Page App with AngularJS',active:'false'},
        {id : id++,description : 'Learn more',active:'false'},
        {id : id++,description : 'Just one more task here',active:'false'}
    ];
    var factory = {};
    
    factory.getTasks = function(){
      return tasks;
    };
    
    factory.getId = function(){
      return id;
    };
    
    factory.incId = function(){
      id ++;
    };
  
    return factory;
  });

  taskApp.controller('TaskController', function($scope, TaskFactory,$routeParams){
    $scope.tasks = [];
    init();
    function init(){
      $scope.tasks = TaskFactory.getTasks();
    }
    
    $scope.addTask = function(){
      $scope.tasks.push({
        id : TaskFactory.getId(),
        description : $scope.newTask.description
      });
      TaskFactory.incId();
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



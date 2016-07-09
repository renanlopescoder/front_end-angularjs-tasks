/* global taskApp */

  taskApp.factory('TaskFactory', function(){
      var tasks = [
          {id : '1',description : 'Single Page App with AngularJS'},
          {id : '2',description : 'Learn more'},
          {id : '3',description : 'Just one more task here'}
      ];

      var factory = {};

      factory.getTasks = function(){
        return tasks;
      };
      
      return factory;
  });

  taskApp.controller('TaskController', function($scope, TaskFactory){
      $scope.tasks = [];

      init();

      function init(){
        $scope.tasks = TaskFactory.getTasks();
      }

      $scope.addTask = function(){
        $scope.tasks.push({
          id : $scope.newTask.id,
          description : $scope.newTask.description
        });
      };
      $scope.updateTask = function(task){
        $scope.tasks[Number(task.id)-1] = {id :  Number(task.id), description: $scope.updateTask.description};
      };
  });



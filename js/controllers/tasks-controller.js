
taskApp.controller('TaskController', function($scope){
  $scope.tasks = [    {
        id : '1',
        description : 'Sistem with AngularJS'
      },
      {
        id : '2',
        description : 'Learn more'
      },
      {
        id : '3',
        description : 'Just for test search'
      }];
});
// angular.module('tasksApp').factory('tasksFactory', function(){
//   var tasks = [
//     {
//       id : '1',
//       description : 'Sistem with AngularJS'
//     },
//     {
//       id : '2',
//       description : 'Learn more'
//     },
//     {
//       id : '3',
//       description : 'Just for test search'
//     }
//   ];
// });

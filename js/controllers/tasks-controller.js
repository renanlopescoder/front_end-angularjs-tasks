
taskApp.controller('TaskController', function($scope){
  $scope.tasks = {
    userName : 'Renan',
    userLastName : 'Lopes',

    task :
      [{
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
      }],
      userFullNameFunc : function tasksObject(){
        var userObject;
        userObject = $scope.tasks;
        return userObject.userName + " " + userObject.userLastName;
      }
    };
});

var app = angular.module('myapp',[]);
app.controller('UserController',function($scope,$http){
  $scope.username = "";
  $scope.submit = function(){
    $http.post("/users",{user:$scope.username});
    qu() 
  }

  var qu = function(){
    $http.get('/users').success(function(users){ 
      $scope.users= users;
    })
  }

  qu()
})

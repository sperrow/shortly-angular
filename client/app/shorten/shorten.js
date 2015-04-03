angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {

  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function(resp){
        $location.path('/');
      })
      .catch(function(error){
        console.log(error);
      });
  };

  $scope.signout = function() {
      Auth.signout();
  };
});

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(resp){
        $scope.data.links = resp;
      })
      .catch(function(error){
        console.log(error);
      });
  };

  $scope.signout = function() {
      Auth.signout();
  };

  $scope.getLinks();
});



angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(resp){
        $scope.data.links = resp;
      //    console.log('data @ controller: ', $scope.data.links);
      })
      .catch(function(error){
        console.log(error);
      });
  };

  $scope.getLinks();
  //console.log('data @ controller: ', $scope.data.links);
  //console.log('data @ 12: ', $scope.data.links);
});



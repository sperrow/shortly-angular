angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

 $scope.link = {};

  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function(resp){ //will look like newLink below
        console.log("Resp from Link Controller: ", resp);

      })
      .catch(function(error){
        console.log(error);
      });
  };


});


// newLink = {
//             url: url,
//             visits: 0,
//             base_url: req.headers.origin,
//             title: title}

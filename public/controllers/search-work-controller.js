(function(){
    angular.module('startup')
.controller('SearchWork', ['$scope','$rootScope', '$state', '$http', function($scope, $rootScope,$state, $http){
  
        $scope.searchng = function(){

            $http.post('/swork/'+$rootScope.User, $scope.x).success(function(response){
      
            $scope.work=response;
            }).error(function(error){
                console.log(error);
            });
         
        };





$scope.Home = function(){
     $state.go('profile', { reload: true });

            
        }



    }]);
}());
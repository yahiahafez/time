
 (function(){
    angular.module('startup')
.controller('ViewController', ['$scope','$rootScope' ,'$state', '$http', function($scope, $rootScope,$state, $http){


 
$rootScope.id="";

 $http.post('/workview/'+$rootScope.User).success(function(response){
               


        $scope.works=response;

                
            
            }).error(function(error){
                console.log(error);
            })



$scope.Home = function(){
     $state.go('profile', { reload: true });

            
        }

          
      $scope.Booking= function(id){
          $rootScope.id=id;
  
$state.go('viewBooking', { reload: true });
           }
  


$scope.update = function(id){
    //console.log(id);

    $rootScope.id=id;
          $state.go('updating', { reload: true });

        }


 $scope.delete = function(id){
        console.log(id);
$rootScope.id=id;
            $http.post('/delete/' + $rootScope.id, $scope.work).success(function(response){
             $state.go('profile', { reload: true });
               
            }).error(function(error){
                console.log(error);


            })
             $state.go('profile', { reload: true });
        }



   }]);
}());
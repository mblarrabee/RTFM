angular.module("rtfmApp").controller("mainCtrl", function($scope, authService){
    
    $scope.register = function(){
        authService.register($scope.newEmail, $scope.newUsername, $scope.newPassword).then(function(res){
          console.log(res);  
        })
    }
})
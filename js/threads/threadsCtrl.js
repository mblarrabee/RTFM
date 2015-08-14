angular.module("rtfmApp").controller("threadsCtrl", function($scope, threadsRef, $firebaseArray){

    $scope.threads = $firebaseArray(threadsRef);
    
    $scope.createThread = function(username, newThreadTitle){
        $scope.threads.$add({
            username: username,
            title: newThreadTitle
        });
    }
});
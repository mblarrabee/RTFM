angular.module("rtfmApp").service("authService", function($q, $firebaseAuth, $firebaseObject){
    
    var ref = new Firebase("https://mikertfm.firebaseio.com/");
    var authObj = $firebaseAuth(ref);
    
    this.register = function(email, username, password){
        console.log("in service "+email+ " " + username + " " + password);
        console.log(authObj);
        var dfd = $q.defer();
        authObj.$createUser({
            email:  email,
            password:   password
        }).then(function(authData){
            debugger
            console.log(authData);
            var id = authData.uid.replace("simplelogin:", "");
            var userRef = new Firebase("https://mikertfm.firebaseio.com/users/" + id);
            var userObj = $firebaseObject(userRef);
            console.log(userObj);
            userObj.email = email;
            userObj.username = username;
            userObj.password = password;
            console.log(userObj);
            userObj.$save().then(function(res){
                console.log(res); 
                dfd.resolve(res);
            })
        }, function(err){
            console.log(err);   
        })
        
        
        return dfd.promise;
    };
})
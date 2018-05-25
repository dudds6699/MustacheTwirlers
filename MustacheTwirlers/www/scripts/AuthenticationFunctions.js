function authenticateGoogle() {
    firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            token = result.credential.accessToken;
           
            // The signed-in user info.
            user = result.user;     

            window.localStorage.setItem("user", user);
            window.localStorage.setItem("token", token);
           
        }
    }).catch(function (error) {
        // Handle Errors here.      
        var errorCode = error.code;
        var errorMessage = error.message;
    });

    firebase.auth().signInWithRedirect(googleProvider).then(function () {     
        return firebase.auth().getRedirectResult();
    }).then(function (result) {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        token = result.credential.accessToken;
 
        // The signed-in user info.
        user = result.user;     

        window.localStorage.setItem("user", user);
        window.localStorage.setItem("token", token);
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
    });



}
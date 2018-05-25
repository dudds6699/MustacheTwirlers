// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.


(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    //var db = firebase.firestore();
    //db.collection("events").add({ first: "login" }).then(function (docref) {
    //    console.log(docref.id);
    //});

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        //if (getAuthUserInfo != null) {
        //    $('#authGoogle').addClass('authenticated');
        //    //check if the user is in the db and if not we add them so we can keep track of that
        //}
        $(document).trigger('auth-refresh');
        setListener();

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
        $(document).trigger('auth-refresh');
  
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
        $(document).trigger('auth-refresh');
   

    };

    $(document).on('click', '#authGoogle',function () {
        authenticateGoogle();
    });

    $(document).on('click', '#sendbutton', function () {
        addMessage($('#chat').val());
        $('#chat').val('');
    });

    $(document).ready(function () {
        $(document).trigger('auth-refresh');
    });

    $(document).on('auth-refresh', function () {
        console.log('loaded');
        if (CurrentUser != null) {
            $('.authenticated').hide();
        } else {
            $('.authenticated').show();
        }
    });

    function setListener() {
        var db = firebase.firestore();
        db.collection("messsages")
            .onSnapshot(function () { });
        db.collection("messsages").onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    var data = change.doc.data();
                    console.log(data);
                    var items = $('<div/>', {
                        "class": "row"
                    }).append($('<div/>', { "class": "col-sm-6", "text": data.name }))
                        .append($('<div/>', { "class": "col-sm-6", "text": data.message }));


                    $('#chatarea').append(items);

                }
        
            });
        });
    }

} )();
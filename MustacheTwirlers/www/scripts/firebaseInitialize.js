firebase.initializeApp(config);
const firestore = firebase.firestore();
const firestoreSettings = { timestampsInSnapshots: true };
firestore.settings(firestoreSettings);
var googleProvider = new firebase.auth.GoogleAuthProvider();
var CurrentUser = null;
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        CurrentUser = user;

    } else {
        // No user is signed in.
        CurrentUser = null;
    }
});

function addMessage(txt) {
    var item = message;
    
    item.name = CurrentUser.displayName;
    item.message = txt    

    var db = firebase.firestore();
    db.collection("messsages").add(item).then(function (docref) {
        console.log(docref.id);
    });
}


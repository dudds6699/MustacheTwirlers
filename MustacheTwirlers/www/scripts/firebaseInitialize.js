firebase.initializeApp(config);
const firestore = firebase.firestore();
const firestoreSettings = { timestampsInSnapshots: true };
firestore.settings(firestoreSettings);
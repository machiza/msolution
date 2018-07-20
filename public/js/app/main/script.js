$(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAOVX_8q5S-2nV_E5aN1_pp1MMUQjOibHQ",
        authDomain: "msolution-90e6e.firebaseapp.com",
        databaseURL: "https://msolution-90e6e.firebaseio.com",
        projectId: "msolution-90e6e",
        storageBucket: "msolution-90e6e.appspot.com",
        messagingSenderId: "746401686761"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
          console.log(firebaseUser)
        } else {
          window.location.href = "/";
        }
      });

    $('#btnLogout').click(function() {
        firebase.auth().signOut();
        window.location.href = "/";
    });
});
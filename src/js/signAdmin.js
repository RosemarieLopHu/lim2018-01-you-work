function crear() {
  let correo = document.getElementById('email2').value;
  let contraseña = document.getElementById('password2').value



  firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
  .then( window.location = "../html/indexAdmin.html")
  .catch(function (error) {
   
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]

  
}


//usuario existente
function iniciar (){

firebase.auth().signInWithEmailAndPassword(email, password).then(window.location = "../html/indexAdmin.html").catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // [START_EXCLUDE]
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
  document.getElementById('quickstart-sign-in').disabled = false;
  // [END_EXCLUDE]
});

}
 

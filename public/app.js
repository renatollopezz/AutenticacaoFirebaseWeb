//anonymous function
 (function (){

  //Duration alert
  var duration = 2000;

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBLJbigmq-pqPt8vLRyK6eXwUi38VBF8cs",
    authDomain: "autenticacaousuario-38de0.firebaseapp.com",
    databaseURL: "https://autenticacaousuario-38de0.firebaseio.com",
    storageBucket: "autenticacaousuario-38de0.appspot.com",
    messagingSenderId: "482680623943"
  };
  firebase.initializeApp(config);

  // Get components
  const edtEmail = document.getElementById("email");
  const edtPassword = document.getElementById("password");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");
  const btnSignOut = document.getElementById("btnSignOut");

  // Add event bntLogin
  btnLogin.addEventListener('click',e=> {
  		const email = edtEmail.value;
  		const password = edtPassword.value;
  		const firebaseAuth = firebase.auth();

  		//SignIn
  		const promise = firebaseAuth.signInWithEmailAndPassword(email,password);

      //Return promise
      promise.catch(function(error) {
          var codErro = error.code;
          if(codErro === 'auth/invalid-email'){
            Materialize.toast("Invalid Email!",duration);
          }else if(codErro ==='auth/user-disabled'){
            Materialize.toast("User Disabled!",duration);
          }else if (codErro === 'auth/user-not-found') {
            Materialize.toast("User not found, please register email!",duration);
          }else if(codErro ==='auth/wrong-password'){
            Materialize.toast("Password incorrect!",duration);
          }
      });
  });
  

  btnSignUp.addEventListener('click',e=>{
      const email = edtEmail.value;
      const password = edtPassword.value;
      const firebaseAuth = firebase.auth();
      //SignUp
      const promise = firebaseAuth.createUserWithEmailAndPassword(email,password);

      //Return promise  
      promise.catch(function(error) {
        var codErro = error.code;
        if(codErro === 'auth/email-already-in-use'){
          Materialize.toast("Email already in use!",duration);
        }else if(codErro ==='auth/invalid-email'){
          Materialize.toast("invalid email!",duration);
        }else if (codErro === 'auth/operation-not-allowed') {
          Materialize.toast("email/password accounts are not enabled in application!",duration);
        }else if(codErro ==='auth/weak-password'){
          Materialize.toast("Weak password!",duration);
        }
      });
  });

  //Desconect user
  btnSignOut.addEventListener('click',e=>{
       firebase.auth().signOut();
  });

//Changed user status
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      Materialize.toast("Wellcome!",duration);
    }else{
    
    }
  });
})();
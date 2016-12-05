 (function (){

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBLJbigmq-pqPt8vLRyK6eXwUi38VBF8cs",
    authDomain: "autenticacaousuario-38de0.firebaseapp.com",
    databaseURL: "https://autenticacaousuario-38de0.firebaseio.com",
    storageBucket: "autenticacaousuario-38de0.appspot.com",
    messagingSenderId: "482680623943"
  };
  firebase.initializeApp(config);


  // get components

  const edtEmail = document.getElementById("email");
  const edtPassword = document.getElementById("password");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignIn = document.getElementById("btnSignIn");
  const btnSignOut = document.getElementById("btnSignOut");

  // add event bntLogin

  btnLogin.addEventListener('click',e=> {
  		const email = edtEmail.value;
  		const password = edtPassword.value;
  		const firebaseAuth = firebase.auth();

  		//logando

  		const promise = firebaseAuth.signInWithEmailAndPassword(email,password);
     
  		  promise.catch(function(error) {
          var codErro = error.code;
          if(codErro === 'auth/invalid-email'){
            alert("Invalid Email!");
          }else if(codErro ==='auth/user-disabled'){
            alert("User Disabled!");
          }else if (codErro === 'auth/user-not-found') {
            alert("User not found!");
          }else if(codErro ==='auth/wrong-password'){
            alert("Password incorrect!");
          }
        });
  });
  

btnSignIn.addEventListener('click',e=>{
      const email = edtEmail.value;
      const password = edtPassword.value;
      const firebaseAuth = firebase.auth();

      const promise = firebaseAuth.createInWithEmailAndPassword(email,password);

      promise.catch(function(error) {
          var codErro = error.code;
          if(codErro === 'auth/email-already-in-use'){
            alert("Email already in use!");
          }else if(codErro ==='auth/invalid-email'){
            alert("invalid email!");
          }else if (codErro === 'auth/operation-not-allowed') {
            alert("email/password accounts are not enabled in application!");
          }else if(codErro ==='auth/weak-password'){
            alert("Weak password!");
          }
        });
  });
  

});





//desconectar usuario
btnSignOut.addEventListener('click',e=>{
  firebase.auth().signOut();
});

//evento de auteracao do estado do usuario (login)
  firebase.auth().onAuthStateChanged(firebaseUser => {

    if(firebaseUser){
      alert("");
    }else{
      alert("nao logado");
    }
  });

}());
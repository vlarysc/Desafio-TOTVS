// Para criar uma conta

var botao = document.getElementById("botao");
var email = document.getElementById("email");
var senha = document.getElementById("senha");

botao.addEventListener("click", function () {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, senha.value)
    .then((user) => {
      console.log("oi");
      window.location = "http://127.0.0.1:5500/assets/navegacao/telaLogin.html";
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Erro ao logar!!");
      // ..
    });
});

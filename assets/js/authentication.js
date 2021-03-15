var inputBtn = document.getElementById("inputBtn");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");

inputBtn.addEventListener("click", function () {
  firebase
    .auth()
    .signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
    .then((user) => {
      alert("Usuário conectado!");
      window.location =
        "http://127.0.0.1:5500/assets/navegacao/telaInicial.html";
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("erro!");

      alert("Erro ao logar!!");
    });
});

var usuarios = [
    "batata@gmail.com", "nuvem@gmail.com" , "cores@gmail.com"
];
var senhas= [
    "123456" , "abacaxi" , "654321"
];

function validar() {
    var usuario = document.getElementById("idEmail").value;
    var senha = document.getElementById("idPass").value;

    for (var i in usuarios) {
        var us = usuarios[i];
        if (usuarios[i] == usuario && senhas[i] == senha) {
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}
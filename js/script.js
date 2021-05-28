//scrpt para verificar tds os seletores//
/*const fields = document.querySelectorAll("[input]")

console.log(fields)

function customValidation(event) {
    const field = event.target

    function verifyErrors() {
        let foundError = false;
        for (let error in field.validity) {
            if (error != "customError" && field.validity[error]) {
                foundError = error
            }
        }
        return foundError;
    }
    const error = verifyErrors()
    console.log("Error Existem ", error)

    if (erro) { //troca a msg no required//
        field.setCustomValidity("Esse campo é obrigatório")
    } else {
        field.setCustomValidity("")
    }

    for (let field of fields) {
        field.addEventListener("invalid", customValidation)
    }

/*login*/
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
/*fim login*/

var arrayPessoas = []
if (JSON.parse(localStorage.getItem("pessoas")) != null) {
    arrayPessoas.push(JSON.parse(localStorage.getItem("pessoas")));
}
var nome = document.getElementById("inputNome").value;
var cpf = document.getElementById("inputCPF").value;
var idade = document.getElementById("inputIdade").value;
var telefone = document.getElementById("inputTelefone").value;
var email = document.getElementById("inputEmail").value;
var senha = document.getElementById("inputSenha").value;

var pessoa = {
    nome: nome,
    cpf: cpf,
    idade: idade,
    telefone: telefone,
    email: email,
    senha: senha
};
console.log(pessoa);
arrayPessoas.push(pessoa);
var pessoaJson = JSON.stringify(arrayPessoas);
localStorage.setItem("pessoas", pessoaJson);

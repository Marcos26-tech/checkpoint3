//scrpt para verificar tds os seletores//
const fields = document.querySelectorAll("[input]")

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



    let arquivoEmails = ["marcosmaciel@fiap.com.br", "ma@fiap.com.br", "marcos@fiap.com.br"];
    let senhas = [" rm88267", "rm822665", "rm52565"];

    function login() {
        var username = document.login.Email.value;
        username = Email.toLowerCase();
        var password = document.login.pass.value;
        password = pass.toLowerCase();
        for (var cont = 0; cont < arquivoEmails.length; cont++)
            if (username == "arquivoEmails[cont]" && password == "senhas[cont]") {
                window.location = "../portal.html";
                done = 1;

            }
    }

}

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

alert("Salvo com Sucesso");
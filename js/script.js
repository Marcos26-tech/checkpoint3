
//função de verificar se o email e senha informados são validos//
let email = ["marcos@fiap.com.br", "marcosvinicius@fiap.com.br", "vitoria@fiap.com", "jonathan@fiap.com", "luan@fiap.com"];
let senha = ["rm88267", "rm86904", "rm88077", "rm88082", "rm89352"];

let button = document.getElementById("idLogin");
button.addEventListener("click",login);

function login(e) {
    e.preventDefault();
    console.log("login");
    let txtemail = document.getElementById("email");
    let txtidPass = document.getElementById("idPass");
    for (i = 0; i < 5; i++) {
        if (txtemail.value == email[i] && txtidPass.value == senha[i]) {
            window.location.href = "./portal.html";
            return;
        }
    }
    alert("login invalido");
}

//função para o cadastro//
let button = document.getElementById("idCadastro");
button.addEventListener("click", cadastro);
function cadastro() {
    console.log("cadastrado");
    let nome = document.getElementsById("idUser").value;
    let Email = document.getElementsById("idEmail").value;
    let password = document.getElementsById("idPass").value;
    nomes.appendchild(nome)
    email.appendchild(Email);
    senha.appendchild(password);
    alert("Parabens " + nomes + "seu cadastro foi concluído com sucesso");
    window.location.href = "../portal.html";
}




// função fale conosco//
function validardados(){
    var assunto = document.getElementById("idAssunto").value;
    var nome = document.getElementById("idUserf").value;
    var email = document.getElementById("idEmailf").value;
    var comentario = document.getElementById("idComentario").value;

    if (assunto == "" || nome == "" || email == "" || comentario == ""){
       alert("Preencha todos os campos");
       return false;
    }
    
    alert(
        "Todos os campos foram preenchidos");
        window.location.href = "../portal.html";
}


/**
 * Fazer aqui o comentario para o  professor
 */
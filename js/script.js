//função de verificar se o email e senha informados são validos//
let nomes = ["Jonathan Felix ", "Marcos Maciel ", "Marcos Vinicius ", "Luan Oliveira ", "Vitoria Akemi"]
let email = ["marcos@fiap.com.br", "marcosvinicius@fiap.com.br", "vitoria@fiap.com", "jonathan@fiap.com", "luan@fiap.com"];
let senha = ["rm88267", "rm86904", "rm88077", "rm88082", "rm89352"];

let input = document.getElementById("idLogin");
input.addEventListener("click", login);

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

//função para o cadastro com onclick//
function cadastro() {
    let nome = document.getElementById("idUser").value;
    let Email = document.getElementById("idEmail").value;
    let password = document.getElementById("idPass").value;
    nomes.push(nome);
    email.push(Email);
    senha.push(password);
    alert("Parabens " + nome + " seu cadastro foi concluído com sucesso" + "\n" + "Cadastrados: " + nomes);
    window.location.href = "./portal.html";
}


// função fale conosco com onclick //
function validardados() {
    let assunto = document.getElementById("idAssunto").value;
    let nome = document.getElementById("idUserf").value;
    let email = document.getElementById("idEmailf").value;
    let comentario = document.getElementById("idComentario").value;

    if (assunto == "" || nome == "" || email == "" || comentario == "") {
        alert("Preencha todos os campos!");
        return false;

    } else {
        alert("Todos os campos foram preenchidos, essa página ainda não envia e-mail, mas caso enviasse já estaria garantido que os campos foram preenchidos");
        window.location.href = "./portal.html";


    }

}

/**
 * Integrantes do grupo Nomes: Marcos Vinicus, Vitória Akemi, Jonathan Felix, Marcos Maciel, Luan
 * Querido Professor Alexandre, achamos uma oportunidade de aprender a desenvolver nossas habilidades em html, css e js. 
 * Porém em js ficou um pouco abstrato como fazer algumas coisas, esperamos que tenhamos conseguido atingir o propósito do trabalho. 
 * Desejamos nos encontrar no próximo semestre para os próximos cps!
 * Atenciosamente Grupo Panaceia.
 */

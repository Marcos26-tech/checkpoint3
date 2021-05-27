//scrpt para verificar tds os seletores//
const fields = document.querySelectorAll("[required]")

console.log(fields)

function customValidation(event) {
    const field = event.target

    function verifyErrors(){
        let foundError = false;
        for(error in field.validity){

        }
        return foundError;
    }
    verifyErrors()

    //troca a msg no required//
    field.setCustomValidity("Esse campo é obrigatório")

}

for(let field of fields){
    field.addEventListener("invalid", customValidation)
}























// script para o form//
document.querySelector("form").addEventListener("submit", event =>{
    console.log("enviar formulário")
} )

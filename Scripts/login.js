function validar(){
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let link = document.getElementById('link')
    let termos = document.getElementById('exampleCheck1')

    if(String(email.value) == "secretariaMDES@senai.com" && String(senha.value) == "Nota100!"){
     
            link.href = "index.html"

    }else if(Boolean(termos.value) == false){
        link.href = "#"
        window.alert("Você precisa concordar com os termos!")
    } else{
        link.href = "#"
        window.alert("Senha Incorreta!")
    }
}

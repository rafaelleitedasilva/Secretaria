function validar(){
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let link = document.getElementById('link')
    let termos = document.getElementById('exampleCheck1')

    if(termos.checked == false){
        link.href = "#"
        window.alert("Você precisa concordar com os termos!")
            
    }else if(String(email.value) == "secretaria@senai.com" && String(senha.value) == "Nota100!"){
        link.href = "index.html"
    } else{
        link.href = "#"
        window.alert("Senha Incorreta!")
    }
}

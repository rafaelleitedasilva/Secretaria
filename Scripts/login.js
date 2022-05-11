function validar(){
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let link = document.getElementById('link')

    if(String(email.value) == "secretariaMDES@senai.com" && String(senha.value) == "Nota100!" ){
     
            link.href = "index.html"

    }else{
        link.href = "#"
        window.alert("Senha Incorreta!"))
    }
}
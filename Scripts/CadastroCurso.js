       
        function confirma(){
            let senha = document.getElementById('senha')
            let botao = document.getElementById('enviar')

            if(String(senha.value) == "Nota100!"){
                botao.onclick = "#"
                botao.type = "submit"
                window.alert("Curso Enviado")
            }else{
                window.alert("Senha Incorreta, tente novamente!")
                botao.type="#"
            }
          
        }
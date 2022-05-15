       
        function confirma(){
            let senha = document.getElementById('senha')
            let botao = document.getElementById('enviar')
            botao.type = "#"

            if(String(senha.value) == "Nota100!"){
                botao.onclick = "#"
                botao.type = "submit"
                botao.className= 'btn btn-success'
                window.alert('Senha correta!')
            }else{
                botao.type="#"
                botao.className= 'btn btn-danger'
                window.alert('Senha Incorreta!')
            }
          
        }
       
        function confirma(){
            let nomedocurso = document.getElementById('exampleInputCurso')
            let view = document.getElementById('aqui')
            let divCadastro = document.createElement('div')
            let senha = document.getElementById('senha')
            let pcurso = document.createElement('p')
            divCadastro.style = "background-color:red;"
            
           /*  pcurso.innerHTML = `O curso ${String(nomedocurso.value)} foi adicionado!`
            view.appendChild(divCadastro)
            divCadastro.appendChild(pcurso) */

            if(String(senha.value) == "Nota100!"){
                window.alert("Curso cadastrado com Sucesso")
            }else{
                window.alert("Senha Incorreta, tente novamente!")
            }
          
        }
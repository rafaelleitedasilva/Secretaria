var div = document.getElementById('form')
let sala01 = document.getElementById("sala1")

function confirmaSala1(){
        let professor = document.getElementById("professor1")
        let data = document.getElementById("data1")
        let hora = document.getElementById("hora1")
        let tr = document.createElement('tr')
        let cancela = document.createElement('button')
        cancela.className = "btn-danger"
        let tbody = document.getElementById("tbody1");
            
            let tdOne = document.createElement('td')
            tdOne.appendChild(cancela)

            let tdTwo = document.createElement('td')
            tdTwo.innerHTML = String(professor.value);

            let tdThree = document.createElement('td')
            tdThree.innerText = String(data.value);

            let tdFour = document.createElement('td')
            tdFour.innerHTML = String(hora.value);

            cancela.innerText = "X"


            /* for(var i = 0; i < linhas.length; i++){
                var linha = linhas[i];
              linha.addEventListener("click", function(){
                  //Adicionar ao atual
                    selLinha(this, false); //Selecione apenas um
                            //selLinha(this, true); //Selecione quantos quiser
                });
            } */




            /* function selLinha(linha, multiplos){
                if(!multiplos){
                    var linhas = linha.parentElement.getElementsByTagName("tr");
                      for(var i = 0; i < linhas.length; i++){
                         var linha_ = linhas[i];
                         linha_.classList.remove("selecionado");    
                      }
                }
                linha.classList.toggle("selecionado");
              } */
              




            /* cancela.addEventListener("click", function(){
                delete document.getElementsByTagName('tr')
                    }); */

            cancela.onclick = function(){
                cancela.closest("tr").remove();
                /* let itens = tbody.children */
                /* let element = document.getElementsByClassName(x) */
            
                /* tbody.removeChild(itens[x]) */
                /* tbody.removeChild(tbody.children[x]) */
            }
        
            
            tbody.appendChild(tr)
            tr.appendChild(tdTwo)
            tr.appendChild(tdThree)
            tr.appendChild(tdFour)
            tr.appendChild(tdOne)
}

function confirmaSala2(){
    let x = 0;


    


    let professor = document.getElementById("professor2")
    let data = document.getElementById("data2")
    let hora = document.getElementById("hora2")
    let tr = document.createElement('tr')
    let cancela = document.createElement('button')
    cancela.className = "btn-danger"
    let tbody = document.getElementById("tbody2");
        
        let tdOne = document.createElement('td')
        tdOne.appendChild(cancela)

        let tdTwo = document.createElement('td')
        tdTwo.innerHTML = String(professor.value);

        let tdThree = document.createElement('td')
        tdThree.innerText = String(data.value);

        let tdFour = document.createElement('td')
        tdFour.innerHTML = String(hora.value);

        cancela.innerText = "X"
        cancela.onclick = function(){
            cancela.closest("tr").remove();
        }
    
        tbody.appendChild(tr)
        tr.appendChild(tdTwo)
        tr.appendChild(tdThree)
        tr.appendChild(tdFour)
        tr.appendChild(tdOne)
        x++
}

/*     function excluirTudo(){
        let table = document.getElementById('registros')
        let linhas = tbody.children
        tbody.remove(linhas)
    }
             */



         


var div = document.getElementById('form')
let sala01 = document.getElementById("sala1")

/* function Sala1(){
    sala01.className = "selecionado"
    div.className = "show"
}

function sala2(){
    let sala = document.getElementById("sala2")
    sala.className = "selecionado"
}

function sala3(){
    let sala = document.getElementById("sala3")
    sala.className = "selecionado"
}

function sala4(){
    let sala = document.getElementById("sala4")
    sala.className = "selecionado"
} */

/* function confirma(){
    /* let confirma = window.confirm("Você colocou todas as informações?") 
    if(x === "lab1"){
        let professor = document.getElementById("professor")
        let escrita = document.getElementById('lab1')

        escrita.innerText += ` ${String(professor.value)}`
        sala01.className = "escolhido"
    } else{
        window.alert("Não deu certo")
    }
} */

let x = 0;

function confirmaSala1(){
        let professor = document.getElementById("professor")
        let data = document.getElementById("data")
        let hora = document.getElementById("hora")
        let tr = document.createElement('tr')
        tr.className = x
        let cancela = document.createElement('button')
        cancela.className = "btn-danger"
        let tbody = document.getElementById("tbody");
            
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
            x++
        
        
        }
            



         


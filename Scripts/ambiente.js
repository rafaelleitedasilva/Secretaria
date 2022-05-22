var div = document.getElementById('form')
let sala01 = document.getElementById("sala1")
let x = "lab1"

function Sala1(){
    sala01.className = "selecionado"
    div.className = "show"
    x = "lab1";
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
}

function confirma(){
    /* let confirma = window.confirm("Você colocou todas as informações?") */
    if(x === "lab1"){
        let professor = document.getElementById("professor")
        let escrita = document.getElementById('lab1')

        escrita.innerText += ` ${String(professor.value)}`
        sala01.className = "escolhido"
    } else{
        window.alert("Não deu certo")
    }
}

function confirmaSala1(){
    let x = 1;
        let professor = document.getElementById("professor")
        let data = document.getElementById("data")
        let hora = document.getElementById("hora")
        let tr = document.createElement('tr')
        let linhas = tbody.document.getElementsByTagName('tr')
        let cancela = document.createElement('button')
        let tbody = document.getElementById("tbody")
            
            let tdOne = document.createElement('td')
            tdOne.appendChild(cancela)

            let tdTwo = document.createElement('td')
            tdTwo.innerHTML = String(professor.value);

            let tdThree = document.createElement('td')
            tdThree.innerText = String(data.value);

            let tdFour = document.createElement('td')
            tdFour.innerHTML = String(hora.value);

            cancela.innerText = "X"


            for(var i = 0; i < linhas.length; i++){
                var linha = linhas[i];
              linha.addEventListener("click", function(){
                  //Adicionar ao atual
                    selLinha(this, false); //Selecione apenas um
                            //selLinha(this, true); //Selecione quantos quiser
                });
            }




            function selLinha(linha, multiplos){
                if(!multiplos){
                    var linhas = linha.parentElement.getElementsByTagName("tr");
                      for(var i = 0; i < linhas.length; i++){
                         var linha_ = linhas[i];
                         linha_.classList.remove("selecionado");    
                      }
                }
                linha.classList.toggle("selecionado");
              }
              




            cancela.addEventListener("click", function(){
                let linh = document.getElementsByClassName('selecionado')
                linh.remove
                    });

                    tbody.appendChild(tr)
                    tr.appendChild(tdTwo)
                    tr.appendChild(tdThree)
                    tr.appendChild(tdFour)
                    tr.appendChild(tdOne)
                    cancela.onclick = function(){deleta(x)}
                    x++


                }



            

/* function deleta(y){
    tbody.removeChild(tbody.children[y+1])
} */

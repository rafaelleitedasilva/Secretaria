let codigo = document.getElementById("codigo")
let escola = document.getElementById("escola")
let anoletivo = document.getElementById("anoletivo")
let periodo = document.getElementById("periodo")
let termo = document.getElementById("termo")
let curso = document.getElementById('curso')
let codigoIdentificacao = document.getElementById("codigodeindentificacao")
let dataI = document.getElementById("datainicial")
let dataF = document.getElementById("datafinal")
let carga = document.getElementById("cargahoraria")
let vagas = document.getElementById("vagas")


function cadastro(){
    let view = document.getElementById('visualizar')
    let hr = document.createElement('hr')
    let divCadastro = document.createElement('div')
    let h1Curso = document.createElement('h1')
    let escola = document.createElement('p')
    var valueEscola = escola.options[escola.selectedIndex].value;
    let pCodigo = document.createElement('p')
    let pCodigo2 = document.createElement('p') 

    

    h1Curso.className = 'titulo'
    divCadastro.className = 'Cadastro'
    pCodigo.style = 'display: inline-block;'
    pCodigo2.style = 'display: inline-block;'


    h1Curso.innerHTML = `${String(curso.value)}`
    pCodigo.innerHTML = `Código: ${String(codigo.value)}`
    pCodigo2.innerHTML = ` |Código de Identificação: ${String(codigoIdentificacao.value)}`
    escola.innerHTML = `${String(valueEscola)}`

    view.appendChild(divCadastro)
    divCadastro.appendChild(h1Curso)
    divCadastro.appendChild(escola)
    
    divCadastro.appendChild(pCodigo)
    divCadastro.appendChild(pCodigo2)

    divCadastro.appendChild()
    divCadastro.appendChild()
    view.appendChild(hr)
    
}
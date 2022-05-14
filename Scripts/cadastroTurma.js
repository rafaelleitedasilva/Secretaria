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

    //Criando os Elementos
    let view = document.getElementById('visualizar')

    let hr = document.createElement('hr')

    let br = document.createElement('br')

    let divCadastro = document.createElement('div')

    let h1Curso = document.createElement('h1')

    let pescola = document.createElement('p')

    let dataI = document.createElement('p')

    let dataF = document.createElement('p')

    let pCodigo = document.createElement('p')

    let pCodigo2 = document.createElement('p')

    let pcarga = document.createElement('p')

    let pvagas = document.createElement('p')


    //Adicionando a div Cadastro na Div Visualização
    view.appendChild(divCadastro)
    //__________________________________________________

    //Definindo alguns estilos
    h1Curso.className = 'titulo'
    divCadastro.className = 'Cadastro'


    //__________________________________________________
    //Adicionando o nome do curso
    h1Curso.innerHTML = `${String(curso.value)}`
    divCadastro.appendChild(h1Curso)
    //__________________________________________________

    //Adicionando a Escola
    pescola.innerHTML = `${$('#escola').val()}`
    divCadastro.appendChild(pescola)

    //__________________________________________________
    //Adicionando os códigos
    pCodigo2.innerHTML = ` Código de Identificação: ${String(codigoIdentificacao.value)}`
    divCadastro.appendChild(pCodigo2)

    pCodigo.innerHTML = `Código: ${String(codigo.value)} ` + ' '
    divCadastro.appendChild(pCodigo)

    

    //Adicionando Br
    divCadastro.appendChild(br)

    //Datas de Inicio e Final
    dataI.innerHTML = `Data Inicial: ${$('#datainicial').val()}`
    divCadastro.appendChild(dataI)
    dataF.innerHTML = `Data Final: ${$('#datafinal').val()}`
    divCadastro.appendChild(dataF)

    //Adicionando a Carga Horária
    pcarga.innerHTML = `Carga Horária: ${String(carga.value)}`
    divCadastro.appendChild(pcarga)
    
    //Adicionando Vagas
    pvagas.innerHTML = `Vagas: ${String(vagas.value)}`
    divCadastro.appendChild(pvagas)

    //Adicionando a divisão
    view.appendChild(hr)
    
}
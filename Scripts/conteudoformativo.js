function adicionar(){

    /* Pegando o valor dos Inputs */
    let Turmas = document.getElementById('turmas')
    let Cursos = document.getElementById('cursos')
    let Unicurriculares = document.getElementById('unicurriculares')
    let Data = document.getElementById('data')
    let Periodo = document.getElementById('periodo')
    let ConteudoFormativo = document.getElementById('conteudoform')
    /* let table = document.getElementById('conteudo') */
    let tbody = document.getElementById('tbody')
    let h1 = document.getElementById('hide')

    h1.className = 'show'

    /* Criando os Elementos que serão adicionados na página */
    let tr = document.createElement('tr')
    tr.className = ''

    let tdTurmas = document.createElement('td')
    tdTurmas.innerHTML = String(Turmas.value);

    let tdCurso = document.createElement('td')
    tdCurso.innerText = String(Cursos.value);

    let tdCurriculares = document.createElement('td')
    tdCurriculares.innerHTML = String(Unicurriculares.value);

    let tdDatas = document.createElement('td')
    tdDatas.innerHTML = String(Data.value);

    let tdPeriodo = document.createElement('td')
    tdPeriodo.innerHTML = String(Periodo.value);

    let tdFormativo = document.createElement('td')
    tdFormativo.innerHTML = String(ConteudoFormativo.value);

    /* table.appendChild(tbody) */
    tbody.appendChild(tr)
    tr.appendChild(tdTurmas)
    tr.appendChild(tdCurso)
    tr.appendChild(tdCurriculares)
    tr.appendChild(tdFormativo)
    tr.appendChild(tdPeriodo)
    tr.appendChild(tdDatas)
}

function excluir(){
    /* let lastChild = tbody.lastChild
    lastChild.removeChild() */
    tbody.removeChild(tbody.lastChild)
        x--;
}
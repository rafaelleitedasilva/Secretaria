let x = 5;

    let update = document.getElementById('Updates')
    let data = document.getElementById('data')
    let autor = document.getElementById('autor')
    let tbody = document.getElementById('tbody')

function atualizar(){

    let tr = document.createElement('tr')
    tr.className = 'hide'
    
    let th = document.createElement('th')
    th.scope = 'row'
    x++;
    th.innerHTML = x;
    

    let tdTwo = document.createElement('td')
    tdTwo.innerHTML = String(update.value);

    let tdThree = document.createElement('td')
    tdThree.innerText = String(data.value);

    let tdFour = document.createElement('td')
    tdFour.innerHTML = String(autor.value);

    tbody.appendChild(tr)
    tr.appendChild(th)
    tr.appendChild(tdTwo)
    tr.appendChild(tdThree)
    tr.appendChild(tdFour)
}

function excluir(){
    tbody.remove(tbody.lastChild)
        x--;
}
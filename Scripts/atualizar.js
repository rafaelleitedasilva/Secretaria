let x = 6;


function atualizar(){
    let update = document.getElementById('Updates')
    let data = document.getElementById('data')
    let autor = document.getElementById('autor')
    let tbody = document.getElementById('tbody')

    let tr = document.createElement('tr')
    tr.className = 'hide'
    
    let th = document.createElement('th')
    th.scope = 'row'
    th.innerHTML = x;
    x++;



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
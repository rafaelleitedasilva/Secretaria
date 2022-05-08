function input(){
    const input = document.getElementById('file-input')
    input.click();
}


function modal(fileInput){
    let rowUpload = document.getElementById("row")
    let colNova = document.createElement("div.col")
    let files = fileInput.files
    let imgNova = [];   

    for(var i = -1; i < files.length; i++){
        imgNova[i] = document.createElement("img")
      /*   console.log(files[i].name)
        let a = new URL(`/${files[i].name}`, "https://github.com/rafaelleitedasilva")
        console.log(a)
        let url = URL.createObjectURL(a) */
        imgNova[i].src = `../Imagens/Fotos/3.jpeg`
        imgNova[i].className="fotosAlbum"
        rowUpload.appendChild(colNova)
        colNova.appendChild(imgNova[0])
    }
}
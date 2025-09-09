let listaSpesa = [];

function aggiornaCarrello(){
    let lista = document.getElementById("listaSpesa");
    lista.textContent = "";
    for (let oggetto of listaSpesa){
        let li = document.createElement("li");
        li.textContent = oggetto + " " + "";
        lista.appendChild(li);
    }
}

function aggiungiAlCarrello(){
    let elemento = document.getElementById("oggetto").value.trim();
    if (elemento !== ""){
        listaSpesa.push(elemento);
        elemento.value = "";
        aggiornaCarrello();
    }

}

function svuotaCarrello(){
    listaSpesa.splice(0 , listaSpesa.length)
    aggiornaCarrello();
}

function cambiaQuantita(event){
    const bottone = event.target;

    let numeroHTML = document.getElementById("quantita")
    let numero = Number(numeroHTML.textContent)
    
    if (bottone.id == "meno") {
        if(numero <= 0){
            alert("sei gia a 0");
        }else{
        numeroHTML.textContent = --numero;
        }
    } else if (bottone.id == "piu") {
        numeroHTML.textContent = ++numero;
    }
}
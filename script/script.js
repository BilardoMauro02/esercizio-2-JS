let listaSpesa = [];

function aggiornaCarrello(){
    let lista = document.getElementById("listaSpesa");
    lista.textContent = "";
    for (let oggetto of listaSpesa){
        let li = document.createElement("li");
        li.textContent = oggetto;
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
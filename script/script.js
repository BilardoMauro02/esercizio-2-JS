let listaSpesa = [];

const productCatalog = [
{ id: 1, name: "Notebook", price: 800, imageUrl: "./img/notebook.webp" },
{ id: 2, name: "Pen", price: 2, imageUrl: "./img/pendrive.jpg" },
{ id: 3, name: "Backpack", price: 30, imageUrl: "./img/gormiti.png" }
];

function aggiornaCarrello(){
    let lista = document.getElementById("listaSpesa");
    let totale = 0;

    lista.textContent = "";
    listaSpesa.forEach(item => {
        const li = document.createElement("li");
        
        const rimuovi = document.createElement("button");
        rimuovi.textContent = "RIMUOVI";

        rimuovi.onclick = () => {
            listaSpesa = listaSpesa.filter(p => p.id !== item.id);
            aggiornaCarrello();
        }

        li.textContent = `${item.nome}: ${item.quantita}`;
        li.appendChild(rimuovi);
        lista.appendChild(li);
        totale += item.prezzo * item.quantita;
    });
    if (listaSpesa.length > 0){ 
        let prezzoTotale = document.createElement("h3");
        prezzoTotale.textContent = `Totale: €${totale}`;
        lista.appendChild(prezzoTotale);    
    }
    
}

function svuotaCarrello(){
    listaSpesa.splice(0 , listaSpesa.length)
    aggiornaCarrello();
}

function showCatalog() {

    //RECUPERO DEL DIV DEL CATALOGO
    const catalogo = document.getElementById("catalogo");

    //PER OGNI PRODOTTO DEL CATALOGO GENERA UN DIV A CUI LEGARE UN PRODOTTO
    productCatalog.forEach(prodotto => {
        const card = document.createElement("div");
        card.classList.add("prodotto");

        const titolo = document.createElement("h3");
        titolo.textContent = prodotto.name;

        const prezzo = document.createElement("p");
        prezzo.textContent = `Prezzo: €${prodotto.price}`;

        const immagine = document.createElement("img");
        immagine.src = prodotto.imageUrl;
        immagine.alt = prodotto.name;
        immagine.title = prodotto.name;
        immagine.height = 200;
        immagine.width = 150;

        //AGGIUNTA DEI BOTTONI PER SELEZIONARE LA QUANTITA DA AGGIUNGERE
        const bottoni = document.createElement("div");
        bottoni.classList.add("bottoni");

        const meno = document.createElement("button");
        meno.textContent = "-";

        const quantita = document.createElement("h3");
        quantita.textContent = "0";

        const piu = document.createElement("button");
        piu.textContent = "+";
        
        bottoni.appendChild(meno);
        bottoni.appendChild(quantita);
        bottoni.appendChild(piu);

        //GESTIONE DEI BOTTONI (INCREMENTO E SOTTRAZIONE)
        let count = 0;
        meno.onclick = () => {
        if (count > 0) {
            count--;
            quantita.textContent = count;
        } else {
            alert("Sei già a 0");
        }
        };

        piu.onclick = () => {
        count++;
        quantita.textContent = count;
        };

        //FUNZIONALITA DI AGGIUNTA AL CARRELLO
        const aggiungi = document.createElement("button");

        aggiungi.textContent = "Aggiungi";
        aggiungi.dataset.id = prodotto.id

        //AL CLICK RECUPERA L'ID PER VEDERE SE è già PRESENTE
        aggiungi.onclick = () => {

            const nome = prodotto.name;
            const id = prodotto.id;
            const prezzo = prodotto.price;

            //UTILIZZO IL FIND PER TROVARE L'ID E FARE IL CONFRONTO
            const giàPresente = listaSpesa.find(item => item.id == id);
            
            if (giàPresente && count > 0) {
                giàPresente.quantita += count;
                aggiornaCarrello();
            }

            else if (count > 0) {
                listaSpesa.push({ id: id, nome: nome, quantita: count, prezzo: prezzo});
                aggiornaCarrello();
                
            } 
            else {
                alert("Seleziona almeno 1 quantità");
            }
            count = 0;
            quantita.textContent = "0";
        };

        //AGGIUNGE ALLA FINE DI TUTTO STO CASINO GLI ELEMENTI CHE COMPONGONO IL PRODOTTO
        card.appendChild(titolo);
        card.appendChild(prezzo);
        card.appendChild(immagine);
        card.appendChild(bottoni);
        card.appendChild(aggiungi);

        catalogo.appendChild(card);
    });
}


window.onload = showCatalog();

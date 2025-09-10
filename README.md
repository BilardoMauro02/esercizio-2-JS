## 🚀 Funzionalità principali

### ✅ Catalogo dinamico
- I prodotti sono definiti in un array `productCatalog` in `script.js`.
- Ogni prodotto viene renderizzato dinamicamente con:
  - Nome
  - Prezzo
  - Immagine
  - Bottoni `+` e `-` per selezionare la quantità
  - Bottone `Aggiungi` per inserirlo nel carrello

### ✅ Carrello
- I prodotti aggiunti vengono salvati in `listaSpesa`, un array di oggetti con:
  - `id`, `nome`, `quantita`, `prezzo`
- Il carrello viene visualizzato in una `<ul>` con:
  - Nome e quantità
  - Bottone `RIMUOVI` per eliminare singoli prodotti
  - Totale aggiornato in tempo reale

### ✅ Gestione quantità
- Ogni prodotto ha un contatore locale (`count`) che viene incrementato o decrementato con i bottoni `+` e `-`.
- Se il prodotto è già presente nel carrello, la quantità viene aggiornata.

### ✅ Svuota carrello
- Il bottone `svuota` cancella tutti gli elementi da `listaSpesa` e aggiorna la visualizzazione.

## 🧠 Note tecniche

- Il catalogo viene generato al `window.onload` tramite la funzione `showCatalog()`.
- La funzione `aggiornaCarrello()` si occupa di:
  - Visualizzare gli articoli nel carrello
  - Calcolare il totale
  - Gestire la rimozione

---

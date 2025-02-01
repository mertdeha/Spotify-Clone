// UI classını import et
import { UI } from "./ui.js"

// API classını import et
import { API } from "./api.js"

// UI classının örneğini al
const ui = new UI
const api = new API

//! Sayfa yüklendiğinde
 document.addEventListener("DOMContentLoaded", async () => {

    // Loader render et
    ui.renderLoader()

    api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
     console.log(err);
    })
})

//! Form gönderildiğinde
ui.form.addEventListener("submit", (e) => {
    e.preventDefault()

    // form gönderildiğinde input değerine eriş
   const query = e.target[0].value

    // aratılan kelimenin başında ve sonundaki boşlukları kaldı
    if (!query.trim()) {
        return alert("Lütfen geçerli bir arama işlemi gerçekleştiriniz.")
    }

    // Loader ekle
    ui.renderLoader()
    // Title güncelle
    ui.updateTitle(query+ " için sonuçlar")
    
    api
    .searchMusic(query)
    .then((data)=> ui.renderCards(data))
    .catch((err) => alert(err))
})

// Play ikonuna tıklanınca şarkı renderlayan fonk
ui.list.addEventListener("click", (e) => {
    if(e.target.className == 'play') {

        const card = e.target.closest(".card"); 
        // kapsayıcıya verilen veri özelliklerini al
        const data = card.dataset;

        console.log(data);
    
        ui.renderPlayer(data)
        
    }
    
})
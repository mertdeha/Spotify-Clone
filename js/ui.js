export class UI {
  // Kurucu metot
  constructor() {
    this.form = document.querySelector("form")
    this.list = document.querySelector(".list")
    this.title = document.querySelector("#title")
    this.player= document.querySelector(".player")
  }

  //! Yazıları düzenleyen fonk
  sliceText(text) {
    if (text.length > 15) {
      return text.slice(0, 15) + "..."
    } else {
      return text
    }

  }

  renderCards(songs) {
    // Listeye bir şarkı elemanı eklemeden önceki verileri sıfırla
    this.list.innerHTML = ""
    songs.forEach((song) => {


      const card = document.createElement('div')

      card.className = "card";

      // Card elemanına şarkı detaylarını aktar
      card.dataset.title = song.title
      card.dataset.subtitle = song.subtitle
      card.dataset.img = song.images.coverarthq
      card.dataset.mp3 = song.hub.actions[1].uri

      //    card ın html sini belirle
      card.innerHTML = `<figure>
             
                  <img
                    src="${song.images.coverarthq}"
                    alt=""
                  />
         
                  <div class="play">
                    <i class="bi bi-play-fill"></i>
                  </div>
                </figure>
              
                <div class="card-info">
                  <h4>${this.sliceText(song.title)}</h4>
                  <h4>${song.subtitle}</h4>
                </div>`;

      // oluşturulan bu html yi arayüze aktar

      this.list.appendChild(card); // Class ve obje yapıları içerisindeki bir değişkene bu yapılar içerisinde bulunan bir metotla erişmek istersek bunların başına `this` keywordu koymamız gerekir.Bunun sebebi class ve obje yapılarının bu değerin kendi içerisinde olduğunu anlamasıdır
    });
  }

  // Loader render eden fonksiyon
  renderLoader() {
    this.list.innerHTML = `
      <div class="cube-loader">
        <div class="cube-top"></div>
        <div class="cube-wrapper">
          <span style="--i:0" class="cube-span"></span>
          <span style="--i:1" class="cube-span"></span>
          <span style="--i:2" class="cube-span"></span>
          <span style="--i:3" class="cube-span"></span>
        </div>
      </div>`
  }

  // Title güncelleyen fonksiyon
  updateTitle(text) {
    this.title.textContent = text
  }

  // Animasyon ayarlaması yapan fonksiyon
  toggleAnimation(){
    const image = document.querySelector(".info img")

    image.classList.toggle("animate")
  }

  // Player butonunu dinamik yapan fonk
  renderPlayer(song){
    
    this.player.innerHTML = `
      <div class="info">
          <img
            src="${song.img}"
            alt=""
          />
          <div>
            <h5>${song.title}</h5>
            <p>${song.subtitle}</p>
          </div>
        </div>

        <audio
          src="${song.mp3}"
          controls
          autoplay
        ></audio>


        <div class="icons">
          <i class="bi bi-music-note-list"></i>
          <i class="bi bi-boombox"></i>
          <i class="bi bi-pc-display"></i>
        </div>`

        // Şarkı oynatılıyorken resmi döndür
        const audio = this.player.querySelector("audio");

        audio.addEventListener("pause",  this.toggleAnimation)
        audio.addEventListener("play",  this.toggleAnimation)

        
        
  }
}
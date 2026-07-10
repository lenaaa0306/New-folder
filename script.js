const hero = document.querySelector(".hero");

const imagini = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg"
];

let index = 0;

function schimbaImagine(){

    index++;

    if(index >= imagini.length){
        index = 0;
    }

    hero.style.backgroundImage = `url('${imagini[index]}')`;

}

setInterval(schimbaImagine,6000);
//======================
// COUNTDOWN
//======================

const eveniment = new Date("August 30, 2026 14:00:00").getTime();

const timer = document.getElementById("timer");

setInterval(() => {

    const acum = new Date().getTime();

    const diferenta = eveniment - acum;

    const zile = Math.floor(diferenta / (1000 * 60 * 60 * 24));

    const ore = Math.floor((diferenta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minute = Math.floor((diferenta % (1000 * 60 * 60)) / (1000 * 60));

    const secunde = Math.floor((diferenta % (1000 * 60)) / 1000);

    timer.innerHTML =
    `
    <div class="time-box">
        <span>${zile}</span>
        <p>Zile</p>
    </div>

    <div class="time-box">
        <span>${ore}</span>
        <p>Ore</p>
    </div>

    <div class="time-box">
        <span>${minute}</span>
        <p>Minute</p>
    </div>

    <div class="time-box">
        <span>${secunde}</span>
        <p>Secunde</p>
    </div>
    `;

},1000);
//=====================
// GALERIE PREMIUM
//=====================

const galerie = document.querySelectorAll(".photos img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const close = document.querySelector(".close");

galerie.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

close.onclick=function(){

lightbox.style.display="none";

}

lightbox.onclick=function(e){

if(e.target===lightbox){

lightbox.style.display="none";

}

}// Muzică

const playBtn = document.getElementById("playMusic");
const audio = document.getElementById("audio");

playBtn.addEventListener("click", () => {

    if(audio.paused){

        audio.play();

        playBtn.innerHTML = "⏸️ Oprește melodia";

    }else{

        audio.pause();

        playBtn.innerHTML = "🎵 Ascultă melodia noastră";

    }

});// RSVP

const form = document.querySelector(".rsvp form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("❤️ Mulțumim! Confirmarea ta a fost înregistrată.");

    form.reset();

});
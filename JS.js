let audio = document.getElementById("cancion");
let play_btn = document.getElementById("play");
let pause_btn = document.getElementById("pause");
let animation = document.getElementById("gif2")
let first_img = document.getElementById("gif1")
let fondo = document.getElementById("cuerpo")
let imagen = document.getElementById("img")

play_btn.addEventListener("click" , () =>{
    audio.play();
    animation.classList.toggle('active')
    first_img.classList.toggle('active_none')

    fondo.classList.toggle('cuerpo')
    fondo.classList.toggle('gradiente')

    imagen.classList.toogle('rotacion')
});

pause_btn.addEventListener("click" , () => {
    audio.pause();
    animation.classList.toggle('active')
    first_img.classList.toggle('active_none')

    fondo.classList.toggle('cuerpo')
    fondo.classList.toggle('gradiente')

    imagen.classList.toogle('rotacion')
});



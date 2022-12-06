// CARROSSEL 

let time = 4000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)

// MENU TOGGLE

function menuMob() {
    var menu = document.getElementById("myLinks");
    var main = document.getElementById("main");
    var footer = document.getElementById("footer");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        main.style.display = "block";
        footer.style.display = "block";
    } else {
        menu.style.display = "block";
        main.style.display = "none";
        footer.style.display = "none";
    }
}

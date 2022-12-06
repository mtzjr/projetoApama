function menuMob(){
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

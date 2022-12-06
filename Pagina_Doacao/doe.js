/*
Marina Linguanoto Gajego		      	 RA: 835982
José Luiz Bianchini 		             RA: 836863
José Rubens Martinez Junior		         RA: 835925
*/

// menu toggle

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

// info para doação

function tipoPix(){
    ativo("pix", "transf", "boleto", "dinheiro")
    document.getElementById("pix").style.backgroundColor = "#BDF6F2"
    document.getElementById("imagem-doacao").src = "../assets/imagens/qrcode.png"
    document.getElementById("desc-doacao").innerHTML = "Para fazer uma doação de qualquer valor via PIX é só escanear o QRCode ou pesquisar pelo nosso CNPJ 08.769.239/0001-32."
}
function tipoTransf(){
    ativo("transf", "pix", "boleto", "dinheiro")
    document.getElementById("transf").style.backgroundColor = "#BDF6F2"
    document.getElementById("imagem-doacao").src = "../assets/imagens/qrcode.png"
    document.getElementById("desc-doacao").innerHTML = "Para fazer uma doação de qualquer valor via Transferência é só escanear o QRCode ou pesquisar pelo nosso CNPJ 01.234.567/0000-01."
}
function tipoBoleto(){
    ativo("boleto", "pix", "transf", "dinheiro")
    document.getElementById("boleto").style.backgroundColor = "#BDF6F2"
    document.getElementById("imagem-doacao").src = "../assets/imagens/qrcode.png"
    document.getElementById("desc-doacao").innerHTML = "Para fazer uma doação de qualquer valor via Boleto é só escanear o QRCode, entrar em contato ou pesquisar pelo nosso CNPJ 01.234.567/0000-01."
}
function tipoDinheiro(){
    ativo("dinheiro", "pix", "transf", "boleto")
    document.getElementById("dinheiro").style.backgroundColor = "#BDF6F2"
    document.getElementById("imagem-doacao").src = "../assets/imagens/qrcode.png"
    document.getElementById("desc-doacao").innerHTML = "Para fazer uma doação de qualquer valor via Dinheiro é só escanear o QRCode, entrar em contato ou pesquisar pelo nosso CNPJ 01.234.567/0000-01."
}
function ativo(ativo, inativo1, inativo2, inativo3){
    document.getElementById(ativo).style.backgroundColor = "#BDF6F2"
    document.getElementById(inativo1).style.backgroundColor = "#FAFAFA"
    document.getElementById(inativo2).style.backgroundColor = "#FAFAFA"
    document.getElementById(inativo3).style.backgroundColor = "#FAFAFA"
}

// calculadora

var racao = 20;
var remedios = 15;
var castrados = 60;
var valor = 0;

function pegaValor(){
    valor = document.getElementById('valor').value;
    racao = valor / racao;
    remedios = parseInt(valor / remedios);
    castrados = parseInt(valor / castrados);
    document.getElementById('valorAtual').innerHTML = valor;
    document.getElementById('valorAtual').innerHTML = "R$ " + valor;
    document.getElementById('racao').innerHTML = racao + " kg";
    document.getElementById('remedios').innerHTML = remedios;
    document.getElementById('castrados').innerHTML = castrados;
}
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const imgs = document.getElementById('imgs');
const quebrar = document.getElementById('quebrar');

function up() {
    imgs.src="./acesa.jpg"
}

function down() {
    imgs.src="./apagada.jpg"
}

function qbr() {
    imgs.src="./quebrada.jpg"
}


ligar.addEventListener('click', up);
desligar.addEventListener('click', down);
quebrar.addEventListener('click', qbr);

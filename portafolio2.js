var r = document.querySelector(':root');

function funcionExperiencia() {
	var rs = getComputedStyle(r);
	alert("Me temo que aun no tengo experiencia fuera de los cursos ¿Quieres ser mi primer cliente?")
}

function carga() {
	r.style.setProperty('--nada', '#1CB698');
}
function carga2() {
	r.style.setProperty('--nada2', '#1CB698');
}
function carga3() {
	r.style.setProperty('--nada3', '#1CB698');
}
function carga4() {
	r.style.setProperty('--nada4', '#1CB698');
}
function carga5() {
	r.style.setProperty('--nada5', '#1CB698');
}

function creceVentanaGoogle() {
	r.style.setProperty('--altoGoogle', '730px');
	r.style.setProperty('--botonGoogle', 'hidden');}

function reduceVentanaGoogle() {
	r.style.setProperty('--altoGoogle', '285px');
	r.style.setProperty('--botonGoogle', 'visible');
	
}

function creceVentanaArgentina() {
	r.style.setProperty('--altoArgentina', '730px');
	r.style.setProperty('--botonArg', 'hidden');	
}

function reduceVentanaArgentina() {
	r.style.setProperty('--altoArgentina', '285px');
	r.style.setProperty('--botonArg', 'visible');}

function creceVentanaTicmas() {
	r.style.setProperty('--altoTicmas', '730px');
	r.style.setProperty('--botonTicmas', 'hidden');}

function reduceVentanaTicmas() {
	r.style.setProperty('--altoTicmas', '285px');
	r.style.setProperty('--botonTicmas', 'visible');}

function indiceDesplegable() {
	r.style.setProperty('--oculto', '50px')
}
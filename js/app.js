







var on = document.getElementById("on");
var sign = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var dividido = document.getElementById("dividido");
var 7 = document.getElementById("7");
var 8 = document.getElementById("8");
var 9 = document.getElementById("9");
var por = document.getElementById("por");
var 4 = document.getElementById("4");
var 5 = document.getElementById("5");
var 6 = document.getElementById("6");
var menos = document.getElementById("menos");
var 1 = document.getElementById("1");
var 2 = document.getElementById("2");
var 3 = document.getElementById("3");
var 0 = document.getElementById("0");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");
var mas = document.getElementById("mas");

function display(){
	var display = document.getElementById("display");

}

//Eventos
uno.onclick = function(e){
	resultado.textContent = resultado.textContent + "1"
}
dos.onclick = function(e){
	resultado.textContent = resultado.textContent + "2"
}
tres.onclick = function(e){
	resultado.textContent = resultado.textContent + "3"
}
cuatro.onclick = function(e){
	resultado.textContent = resultado.textContent + "4"
}
cinco.onclick = function(e){
	resultado.textContent = resultado.textContent + "5"
}
seis.onclick = function(e){
	resultado.textContent = resultado.textContent + "6"
}
siete.onclick = function(e){
	resultado.textContent = resultado.textContent + "7"
}
ocho.onclick = function(e){
	resultado.textContent = resultado.textContent + "8"
}
nueve.onclick = function(e){
	resultado.textContent = resultado.textContent + "9"
}
cero.onclick = function(e){
	resultado.textContent = resultado.textContent + "0"
}

reset.onclick = function(e){
	resetear();
}
suma.onclick = function(e){
	resetear();
}
resta.onclick = function(e){
	resetear();
}

	

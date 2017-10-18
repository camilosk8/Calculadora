window.onload=manejarClics;

var cifra1="";

function manejarClics() {

	var mas =document.getElementById("mas");
	mas.addEventListener("click",function() {
								operacion("+");
								});
	var menos=document.getElementById("menos");
	menos.addEventListener("click",function() {
								operacion("-");
								});
	var por=document.getElementById("por");
	por.addEventListener("click",function() {
								operacion("*");
								});
	var division=document.getElementById("dividido");
	division.addEventListener("click",function() {
								operacion("/");
								});
	var numero1=document.getElementById("1");
	numero1.addEventListener("click",function() {
								operacion("1");
								});
	var numero2=document.getElementById("2");
	numero2.addEventListener("click",function() {
								operacion("2");
								});
	var numero3=document.getElementById("3");
	numero3.addEventListener("click",function() {
								operacion("3");
								});
	var numero4=document.getElementById("4");
	numero4.addEventListener("click",function() {
								operacion("4");
								});
	var numero5=document.getElementById("5");
	numero5.addEventListener("click",function() {
								operacion("5");
								});

	var numero6=document.getElementById("6");
	numero6.addEventListener("click",function() {
								operacion("6");
								});
	var numero7=document.getElementById("7");
	numero7.addEventListener("click",function() {
								operacion("7");
								});

	var numero8=document.getElementById("8");
	numero8.addEventListener("click",function() {
								operacion("8");
								});

	var numero9=document.getElementById("9");
	numero9.addEventListener("click",function() {
								operacion("9");
								});

	var numero0=document.getElementById("0");
	numero0.addEventListener("click",function() {
								operacion("0");
								});

	var igual=document.getElementById("igual");
	igual.addEventListener("click",calcular);
	

	var punto=document.getElementById("punto");
	punto.addEventListener("click",function() {
								operacion(".");
								});
	var elimina=document.getElementById("on");
	elimina.addEventListener("click",eliminar);


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

	

var Dividir = function(){
	alert("EJERCICIO 1")
	var Diviendo = prompt("Ingresa el Dividendo");
	var Divisor =prompt("Ingresa el Divisor");
	alert(Diviendo / Divisor);
	}
Dividir();

var Edad = function() {
alert("EJERCICIO 2")
var Nombre = prompt("Ingrese su Nombre");
alert("Mucho gusto " + Nombre)
var Nacimiento = prompt("Cuántos años tienes?");
alert(Nombre + " has vivido " + Nacimiento * 365 + " días");
}
Edad ();


var Area = function() {
alert("EJERCICIO 3")
var Radio = prompt("Introduce el rádio del círculo")
alert((Radio*Radio)*3.14156);
}
Area ();

var Costollamada = function() {
	alert("EJERCICIO 4")
alert("A continuación te ayudaremos a calcular el costo de tu llamada")
var Precio = prompt("Ingrese el costo por minuto");
var Duracion = prompt("Ingrese los minutos que has hablado");
alert("Tu llamada ha costado " + Precio * Duracion + " soles");
}
Costollamada ();
alert("EJERCICIO 5")
var Nmayor = function () {
var NUmero1 = prompt("Ingrese el primer número");
var Numero2 = prompt("Ingrese el segundo número");
if (NUmero1 > Numero2) {
alert("El numero mayor es " + NUmero1);
}
else { 
alert("El numero mayor es " + Numero2);
}
}
Nmayor ()

alert("EJERCICIO 6")
var Banquetes = function(){
var Numper = prompt("Ingrese el Numero de Personas");
if (Numper <= 200) {
	alert(Numper * 95);
}
else if (Numper <= 300) {
	alert(Numper * 85);
}
else {
	alert(Numper * 75);
}
}
Banquetes ();

alert("EJERCICIO 7")
var SUMA = function () {
var i =  0;
var Sum = 0; 
while (i < 10) {
var numeros = parseInt(prompt("Ingrese numeros a sumar"));
Sum = numeros + Sum;
i++;
}
alert(Sum);
}
SUMA();


alert("EJERCICIO 8")
var MULTI = function () {
var SUMA = 0;
var multiplo = 0;
while (multiplo < 3000) {
    multiplo = multiplo + 11;
    SUMA = multiplo + SUMA;
}
alert(SUMA); 
}
MULTI();
fabian.js
fabian.js
var nota1;
var nota2;
var nota3;
var prom;

nota1 = prompt("digite nota1");
nota2 = prompt("digite nota2");
nota3 = prompt("digite nota3");

prom = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3;

if (prom >= 70) {
	console.log("alumno aprobado", " y su nota es " + prom);	
}	
else{
		console.log("alumno reprobado", " y su nota es " + prom);
	}
	//codigo corregido y probado//
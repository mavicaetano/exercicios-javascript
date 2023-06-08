var altura = prompt("Digite sua altura em metros: ");
var peso = prompt("Digite seu peso: ");

var imc = Number(peso) / (Number(altura) * Number(altura));

alert("O seu IMC é de  " + imc + ".");
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var peso1 = parseFloat(prompt("Digite o peso dessa nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var peso2 = parseFloat(prompt("Digite o peso da segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));
var peso3 = parseFloat(prompt("Digite o peso da terceira nota:"));

mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)/(peso1 + peso2 + peso3);

alert("A média ponderada é de " + mediaPonderada);
var nome = prompt ("informe seu nome: ")
var altura = parseFloat(prompt("infome sua altura em centimetros"))
var peso = parseFloat(prompt("informe seu peso em quilos"))

altura /= 100;
var imc = peso / (altura * altura);
var faixaImc

if(imc< 16){
  faixaImc = 'baixo peso muito grave';
}else if (imc < 17 ) {
    faixaImc = 'baixo peso grave';
}else if (imc < 18.8) {
    faixaImc = 'baixo peso';
}else if (imc < 25){
    faixaImc='peso normal';
}else if (imc < 30){
    faixaImc='sobrepeso';
}else if (imc < 35){
    faixaImc= 'obesidade grau 1';
}else if (imc < 40){
    faixaImc = 'obesidade grau 2';
}else 
faixaImc = 'obesidade grau 3';

document.write(nome + ' possui índice de massa corporal igual a ' + peso + ' sendo classificado como: ' + faixaImc )

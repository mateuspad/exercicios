/*1 – Insira uma caixa de texto na tela que permita somente números. Baseado no valor 
digitado, calcule a média das notas digitadas pelo usuário.*/
var numeros = [];

function adicionar() {
    numeros.push(parseFloat(document.getElementById("valor").value)); 
    document.getElementById("display1").innerHTML = "Números: " + numeros 
    document.getElementById('valor').value = "";  
}

function verificaMedia(){
    var soma = 0; 
    for(var i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    var resultadoMedia = Math.round(soma/numeros.length, 2);
    document.getElementById("media").innerHTML = "Resultado: "+ resultadoMedia;
    numeros = [];
    document.getElementById("display1").innerHTML = "Números: "+ numeros;
}


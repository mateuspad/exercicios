//– Insira uma caixa de texto na tela e solicite que o usuário digite 5 números, após isso mostre o quadrado de cada número digitado.
var numeros = [];
var cont1 = 0;

function adicionar() {
    numeros.push(parseFloat(document.getElementById("valor").value)); 
    document.getElementById("display1").innerHTML = "Números: " + numeros 
    document.getElementById('valor').value = "";  
}

function calculaQuadrado(){
    var quadradoDosNumeros = []; 
    for(var i = 0; i < numeros.length; i++){
        quadradoDosNumeros.push(numeros[i]*numeros[i]);
        document.getElementById("resultado").innerHTML += "<br> O quadrado de " + numeros[i] + " é " + quadradoDosNumeros[i];
    }
}

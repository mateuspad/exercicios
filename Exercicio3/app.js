/*Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.*/
const numeros = []

function adicionaNúmero(){
    if(numeros.length < 4){
        numeros.push(parseFloat(document.getElementById("valor").value));
        document.getElementById("display1").innerHTML = "Números: " + numeros 
        document.getElementById('valor').value = "";  
    }
    else{
        var maior = Math.max.apply(null, numeros );
        document.getElementById('resultado').innerHTML = "O maior número é o " + maior;
    } 
}


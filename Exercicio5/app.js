/*Crie um programa que entre com os dados de altura e sexo(Utilizar letras como
M, F para facilitar) de 5 pessoas. Imprima na tela quantas pessoas são do sexo
masculino e quantas pessoas são do sexo feminino. Mostre também qual é a maior
altura e se essa altura é de um homem ou uma mulher.
*/
const alturas = []
const sexos = []
let altura = parseFloat(document.getElementById("altura").value)
let sexo = document.getElementById("sexo").value

function adicionaPessoa(){
    if(numeros.length < 4){
        alturas.push(parseFloat(document.getElementById("altura").value));
        document.getElementById("display1").innerHTML = "Números: " + numeros 
        document.getElementById('altura').value = "";  
    }
    else{
        var maior = Math.max.apply(null, numeros );
        document.getElementById('resultado').innerHTML = "O maior número é o " + maior;
    } 
}


sexos.push(document.getElementById("sexo").value)
document.getElementById("display1").innerHTML = "Números: " + numeros 
document.getElementById('altura').value = "";  


/*Peça ao usuário para digitar um array de idades. Após isso, exiba quantas pessoas são maiores de idade e quantas são menores.*/
const idadesMaiores = []
const idadesMenores = []
let idade

function adicionaIdade(){
    if(idade < 18){
        idadesMenores.push(parseFloat(document.getElementById("idade").value));
        document.getElementById("menoresDeIdade").innerHTML = idadesMenores 
        document.getElementById('idade').value = "";  
    }
    else{
        idadesMaiores.push(parseFloat(document.getElementById("idade").value));
        document.getElementById("maioresDeIdade").innerHTML = idadesMaiores 
        document.getElementById('idade').value = "";  
    } 
}


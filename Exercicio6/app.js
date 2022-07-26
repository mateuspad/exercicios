let locale = 'pt-BR';
var nomes = [];

function adicionaNome(){
    nomes.push(parseFloat(document.getElementById("nome").value));
    document.getElementById('nome').value = "";  
}

nomes.sort((a, b) => b.localeCompare(a, locale));

console.log(nomes);
document.getElementById('resultado').innerHTML = nomes
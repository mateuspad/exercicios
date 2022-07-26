var arrayTexto = []

function adicionaTexto(){
    arrayTexto.push(document.getElementById("textoEntrada").value); 
    document.getElementById("textoSaida").innerHTML += arrayTexto 
    document.getElementById('textoEntrada').value = "";  
}

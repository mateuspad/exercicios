var numeros = [];
var par = 0

function adicionar(){
    for(i = 1 ;i <= 10; i++) {		
        numero = parseInt(document.getElementById("valor").value); 
        numeros.push(numero)
        document.getElementById('valor').value = "";  
        if(numero %2 == 0) { 
            par += numero; 
            document.getElementById("display2").innerHTML = "A soma dos números pares é: " + par 
        } 
    }
}
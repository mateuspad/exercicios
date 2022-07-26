var numeros = [5, 7, 1, 8, 9];

numeros.sort(function(a, b) {
    return b - a;
});

console.log(numeros);
document.getElementById('resultado').innerHTML = numeros
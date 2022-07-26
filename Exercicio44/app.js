var contador = 0;
var l = document.getElementById("numero");
window.setInterval(function(){
  l.innerHTML = contador;
  contador++;
},1000);
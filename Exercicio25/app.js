const calcular = document.getElementById('calcular');

calcular.addEventListener('click', ()=>{
    const parametro1 = document.getElementById('parametro1').value;
    const parametro2 = document.getElementById('parametro2').value;
    calcular(parametro1, parametro2);
});

function calcular(parametro1, parametro2){
    let multiplicacao = parametro1 * parametro2;
    document.getElementById('resultado').innerHTML = multiplicacao;
}
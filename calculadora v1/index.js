function calcularResultado() {
    var num1 = parseInt(document.getElementById('caixa1').value);
    var num2 = parseInt(document.getElementById('caixa2').value);

    var ari = document.getElementById('aritmético');
    var valorAri = ari.options[ari.selectedIndex].value;

    var resultado = 0;

    if (valorAri === '+') {
        resultado = num1 + num2;
    } else if (valorAri === '-') {
        resultado = num1 - num2;
    } else if (valorAri === '*') {
        resultado = num1 * num2;
    } else if (valorAri === '/') {
        resultado = num1 / num2;
    }

    document.getElementById('resultado').value = resultado;
}
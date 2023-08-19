
function calculaDolar() {


let real = document.getElementById("real").value    //variável guarda valor do real digitado
let dolar = document.getElementById("dolar").value  // varialvel guarda valor do dolar digitado


let resultado = real / dolar // variavel guarda o valor do resultado


dolares.innerHTML = '$ ' + resultado  // insere o valor do resultado no nosso paragrafo


}
alert('Desenvolvido por Ed_Dev  ')
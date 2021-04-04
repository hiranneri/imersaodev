var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?");
valorEmDolarTexto =  valorEmDolarTexto.replace(",",".");
const valorEmDolarNumero = parseFloat(valorEmDolarTexto);
var dolarHoje;

const fetchValorDolarHoje = () => {
    const url = 'https://economia.awesomeapi.com.br/USD-BRL';
    fetch(url)
        .then(response => response.json())
            .then(dolar => {
                var dolarAPI = dolar[0].high;
                dolarAPI = parseFloat(dolarAPI);
                dolarHoje = dolarAPI.toFixed(2);
                converterValorRealDolar()
            })
}

fetchValorDolarHoje();


function converterValorRealDolar(){    

    if(!isNaN(valorEmDolarNumero)){
        const valorEmReal = valorEmDolarNumero * dolarHoje;
        var valorEmRealFixado = valorEmReal.toFixed(2)
        valorEmRealFixado = valorEmRealFixado.replace(".", ",");
        const containerInfo = document.getElementsByClassName('info-valorconvertido');
        containerInfo[0].innerText = `US$ ${valorEmDolarTexto} dolár(es) hoje custa: R$ ${valorEmRealFixado}`;
    }else{
        alert('Digite um valor válido!');
    }

}




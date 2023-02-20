const button = document.getElementById('button-convert')
const select = document.getElementById('currency-to-convert')


const convertValues = async () => {
    const inputReais = document.getElementById('value-to-convert').value
    const realValue = document.getElementById('real-value')
    const valueConverted = document.getElementById('value-converted')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    


    if (select.value == '€ Euro') {
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputReais / euro)
    }

    if (select.value == 'US$ Dólar americano') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputReais / dolar)
    }

    if (select.value == 'Bitcoin') {
        valueConverted.innerHTML = "BTC " + inputReais / bitcoin
    }

    realValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReais)

}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const countryFlags = document.getElementById('country-flags')

    if (select.value == '€ Euro') {
        currencyName.innerHTML = '€ Euro'
        countryFlags.src = "./assets/Euro.png"
    } else if (select.value == 'US$ Dólar americano') {
        currencyName.innerHTML = 'US$ Dólar Americano'
        countryFlags.src = "./assets/estados-unidos.png"
    } else if (select.value == 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        countryFlags.src = "./assets/Bitcoin.png"
    }
    convertValues()

}
button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

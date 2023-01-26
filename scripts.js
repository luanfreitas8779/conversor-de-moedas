const button = document.getElementById('button-convert')
const select = document.getElementById('currency-to-convert')
const dolar = 5.08
const euro = 5.50
const bitcoin = 117123.25

const convertValues = () => {
    const inputReais = document.getElementById('value-to-convert').value
    const realValue = document.getElementById('real-value')
    const valueConverted = document.getElementById('value-converted')


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
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputReais / bitcoin)
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


export function checkIfPriceValueExists (price: number | undefined) : string {
    if (price !== undefined && !isNaN(price)){
        return String(price)
    }
    else {
        return 'Valor indispoível'
    }
}

export function handleWithDollarRattingConverter (dollarExchangeRate: string | undefined) : string {
    if (dollarExchangeRate !== undefined && dollarExchangeRate !== ''){
        const dollarConverted = parseFloat(dollarExchangeRate)
        return dollarConverted.toFixed(2).replace('.', ',');
    }
    else {
        return 'Valor indispoível'
    }
}
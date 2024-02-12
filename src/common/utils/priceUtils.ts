
export function checkIfPriceValueExists (price: number) : string {
    if (price !== undefined && !isNaN(price)){
        return String(price)
    }
    else {
        return 'Valor indispoível'
    }
}
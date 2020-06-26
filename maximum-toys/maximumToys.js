const maximumToys = (prices, wallet) => {
    //first attempt is to sort numbers
    //then iterate through sorted list until the wallet is maxed out 
    prices.sort(compareNumbers)
    let toys = 0

    prices.forEach((price)=>{
        if (wallet - price > 0 ) {
            wallet -= price
            toys++
        }
    })

    return toys
}

const compareNumbers = (a, b) => a - b

module.exports.maximumToys = maximumToys
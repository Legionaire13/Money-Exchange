// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const nominals = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    }
    const result = {};

    let currentCurrency = currency;

    if (currency > 10000) {
        return {
            error: 'You are rich, my friend! We don\'t have so much coins for exchange'
        };
    }

    for (let key in nominals) {
        if (currentCurrency >= nominals[key]) {
            const value = Math.floor(currentCurrency / nominals[key]);
            result[key] = value;
            currentCurrency -= value * nominals[key];
        }
    }

    return result;
}
//kilometerToMeter convert

function kilomiterToMiter(kilomiter){
    var miter = kilomiter * 1000;
    return miter;
}

var nanamiter = kilomiterToMiter(2);
console.log(nanamiter);

var nanimiter = kilomiterToMiter(5);
console.log(nanimiter);

//megaFriend

function kilomiterToMiter(kilomiter){
    var miter = kilomiter * 1000;
    return miter;
}

var nanamiter = kilomiterToMiter(2);
console.log(nanamiter);

var nanimiter = kilomiterToMiter(5);
console.log(nanimiter);

//budgetCalculator

// budgetCalculator function
function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        //total price
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    } 

}

var totalBudget = budgetCalculator(2, 2, 2);
console.log(totalBudget);
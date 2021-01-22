//kilometerToMeter converter:

function kilomiterToMiter(kilomiter){
    var miter = kilomiter * 1000;
    return miter;
}

var nanamiter = kilomiterToMiter(2);
console.log(nanamiter);

var nanimiter = kilomiterToMiter(5);
console.log(nanimiter);
//end of kilometerToMeter converter

//megaFriend finding:

function kilomiterToMiter(kilomiter){
    var miter = kilomiter * 1000;
    return miter;
}

var nanamiter = kilomiterToMiter(2);
console.log(nanamiter);

var nanimiter = kilomiterToMiter(5);
console.log(nanimiter);
//end of megaFriend finding

//budgetCalculator:

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
//end of budgetCalculator

//hotelCost:

function hotelCost(days) {
    var cost = 0;

    if (days >= 0) {
        if (days <= 10) {
            cost = days * 100;
        }
      
        else if (days <= 20) {
            var first10Days = 10 * 100;
            var remaining = days - 10;
            var second10Days = remaining * 80;
            cost = first10Days + second10Days;
        }
        
        else {
            var first10Days = 10 * 100;
            var second10Days = 10 * 80;
            var remaining = days - 20;
            var after20Days = remaining * 50;
            cost = first10Days + second10Days + after20Days;
        }
        return cost;
    } 

}

var totalCost = hotelCost(11);
console.log(totalCost);
//end of hotelCost


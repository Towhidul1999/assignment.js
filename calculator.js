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
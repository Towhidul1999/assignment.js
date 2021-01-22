//hotelCost

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
// /* Coversion Of Kilometers to Meters */

function kilometerToMeter(num) {
  for (var i = 0; i <= num; i++) {
    var meter = num * 1000;
    if (num <= 0) {
      return "Plese insert a valid no.";
    }
  }
  return meter;
}
var result = kilometerToMeter(50);
console.log(result);

// //* Budget Calculator */

function budgetCalculator(watch, mobile, laptop) {
  var watchPrice = watch * 50;
  var mobilePrice = mobile * 100;
  var laptopPrice = laptop * 500;
  var totalExpense = watchPrice + mobilePrice + laptopPrice;
  return totalExpense;
}
var result = budgetCalculator(2, 3, 5);
console.log(result);

// Hotel Cost */

function hotelCost(day) {
  var totalCost = 0;
  if (day <= 10) {
    totalCost = day * 100;
  } else if (day <= 20) {
    var firstTenDays = 10 * 100;
    var remaining = day - 10;
    var secondTenDays = remaining * 80;
    totalCost = secondTenDays + firstTenDays;
  } else {
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remaining = day - 20;
    var thirdTenDays = remaining * 50;
    totalCost = firstTenDays + secondTenDays + thirdTenDays;
  }
  return totalCost;
}
var result = hotelCost(23);
console.log(result);

//* Mega Friend */

function megaFriend(names) {
  var longest = names[0];
  for (var i = 0; i < names.length; i++) {
    var element = names[i];
    if (element.length > longest.length) {
      longest = element;
    }
  }
  return longest;
}
var result = megaFriend([
  "Unmoy Biswas",
  "Uttam Biswas",
  "Utsha Biswas",
  "Suparna Biswas",
]);
console.log(result);

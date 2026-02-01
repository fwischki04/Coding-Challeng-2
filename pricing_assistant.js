let productName = "Note Book";
let costPerUnit = 1.99;
let basePrice = 7.99;
let discountRate = 0.10;
let salesTaxRate = 0.07;
let fixedMonthlyCost = 50;


let discountedPrice = basePrice * (1 - discountRate);

let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);

let profitPerUnit = finalPriceWithTax - costPerUnit;

let breakEvenUnits = Math.ceil(fixedMonthlyCost / profitPerUnit);

let isProfitablePerUnit = profitPerUnit > 0;

console.log(`Product: ${productName}`);
console.log(`Discount Price (before tax): ${discountedPrice.toFixed(2)}`);
console.log(`Final Price (with tax): ${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit per unit: ${profitPerUnit.toFixed(2)}`)
console.log(`Break even units: ${breakEvenUnits.toFixed(2)}`)
console.log(`Proditable Per unit: ${isProfitablePerUnit}`)

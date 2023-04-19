export class Price_of_sandwich {
    constructor (topping) {
        this.topping = topping
        this.baseSandwichPrice = 10
    }
countSandwichPrice () {
    if (this.topping =="turkey")
    return 0.8 * this.baseSandwichPrice;
    else if (this.topping == "salmon")
    return 1.1 * this.baseSandwichPrice;  
    else if (this.topping == "cheese")
    return 0.4 * this.baseSandwichPrice;
    else   return "choose your topping";
}

priceOfSandwich () {
    return `--- Your ` + this.topping + ` sandwich costs USD  ` + this.countSandwichPrice() + `! ---\n`
}
}

// let newSandwichPrice = new Price_of_sandwich ("cheese")
// console.log(newSandwichPrice.priceOfSandwich());
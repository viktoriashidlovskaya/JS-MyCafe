
export default class Price_of_coffee {
    constructor (cupVolume) {
        this.cupVolume = cupVolume ?? "medium"
    }
priceDependsOnCupSize() {
    if (this.cupVolume == "big") {
      return 4;
    } else if (this.cupVolume == "medium") {
      return 3;
    } else if (this.cupVolume == "small") {
      return 2;
    } else return "Выберите объём чашки";
    }
  

priceOfCoffee () {
    return"\n--- This tasty coffee costs USD " + this.priceDependsOnCupSize() + " ---\n"
    }
}

// let newPrice = new price_of_coffee("big")
// console.log(newPrice.PriceOfCoffee());



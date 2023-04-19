import { Espresso } from "./CoffeeRecipes.js";
import { Macchiato } from "./CoffeeRecipes.js";
import { Cappuccino } from "./CoffeeRecipes.js";
import Price_of_coffee from "./CoffeePrice.js";
import { Recipe_of_sandwich } from "./SandwichRecipe.js";
import { Price_of_sandwich } from "./SandwichPrice.js";

//========================================================

// ORDER DATA: ==================

let clientName = "Lilly" // Your name
let nameOfCoffee = `macchiato` // "espresso" OR 'cappuccino' OR `macchiato`
let cupVolume = `big` // "small" OR 'medium' OR `big`
let piecesOfSugar = 3 // 0 OR any amount of pieces
let topping = `salmon` // "cheese" OR 'turkey' OR `salmon`
let bread = 'black' // "white" or 'black'

//========================================================

// Creation of order ============

function BigOrder (nameOfCoffee, piecesOfSugar,cupVolume, topping, bread) {

console.log(`Hello, ${clientName}! We are glad to see you in our cafe!\n`)
console.log("Here is your order: \n"); 

if (nameOfCoffee == "espresso") {
    let newEspresso = new Espresso (nameOfCoffee, cupVolume, piecesOfSugar)
    console.log(newEspresso.recipeOfCoffee());

} else if (nameOfCoffee == "macchiato") {
    let newMacchiato = new Macchiato (nameOfCoffee, cupVolume, piecesOfSugar)
    console.log(newMacchiato.recipeOfCoffee());

} else if (nameOfCoffee == "cappuccino") {
    let newCappuccino = new Cappuccino (nameOfCoffee, cupVolume, piecesOfSugar)
    console.log(newCappuccino.recipeOfCoffee());
} 

let newCoffeePrice = new Price_of_coffee(cupVolume);
console.log(newCoffeePrice.priceOfCoffee());

let newSandwichRecipe = new Recipe_of_sandwich(topping, bread)
console.log(newSandwichRecipe.sandwichRecipe());

let newSandwichPrice = new Price_of_sandwich(topping)
console.log(newSandwichPrice.priceOfSandwich());
console.log("===========================================");

let totalCost = newCoffeePrice.priceDependsOnCupSize() + newSandwichPrice.countSandwichPrice()
console.log(`=== Totally your order costs USD ${totalCost} === \n ---- See you again soon! ----`);
}

// Order result ============

BigOrder(nameOfCoffee, piecesOfSugar, cupVolume, topping, bread);
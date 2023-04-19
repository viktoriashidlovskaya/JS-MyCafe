export class Recipe_of_sandwich {
    constructor (topping, bread) {
        this.topping = topping
        this.bread = bread ?? "white" 
    }

sandwichRecipe () {
    return `The magic recipe of the most delicious sandwich with ${this.topping} is: \r
1. Take a slice of ${this.bread} bread; \r
2. Put a slice of ${this.topping} on a slice of bread; \r
3. Enjoy your meal! \n`
}    
}

// let newSandwich = new Recipe_of_sandwich ("cheese")
// console.log(newSandwich.sandwichRecipe());


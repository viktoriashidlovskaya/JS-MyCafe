//======================== Espresso ============================

export class Espresso {
    constructor (nameOfCoffee, cupVolume, piecesOfSugar) {
        this.cupVolume = cupVolume ?? "medium"
        this.nameOfCoffee = nameOfCoffee
        this.piecesOfSugar = piecesOfSugar ?? 0
        this.amountOfEspresso = "1/4"
    }
headerOfRecipe () {
        return `How we prepare a ${this.cupVolume} cup of ${this.nameOfCoffee} for you:`
      }
stepPlaceCupIntoMachine () {
        return `- Take an empty ${this.cupVolume} cup and place it into the coffee machine;`
      }
stepFillCupByEspresso () {
        return `- Fill ${this.amountOfEspresso} of the cup by espresso;`
      }
stepAddSugar () {
        return `- Add ${this.piecesOfSugar} pieces of sugar into the cup and stir;`
      }      
stepDecorateAndServe () {
        return `- Decorate the cup and serve ${this.nameOfCoffee}.`
      }
recipeOfCoffee () {
    if (this.piecesOfSugar == 0) return (this.headerOfRecipe() + "\n" + this.stepPlaceCupIntoMachine() + "\n" + this.stepFillCupByEspresso() + "\n" + this.stepDecorateAndServe());
    else return (this.headerOfRecipe() + "\n" + this.stepPlaceCupIntoMachine() + "\n" + this.stepFillCupByEspresso() + "\n" + this.stepAddSugar() + "\n" +  this.stepDecorateAndServe());
}
}

// let newEspresso = new Espresso ("espresso")
// console.log(newEspresso.recipeOfCoffee());

//======================== Macchiato =====================================

export class Macchiato extends Espresso {
    constructor (nameOfCoffee, cupVolume, piecesOfSugar) {
        super(nameOfCoffee,cupVolume,piecesOfSugar)
        this.amountOfEspresso = "1/2"
        this.amountOfWhippedMilk = "1/4";
    }
stepAddWhippedMilk () {
        return`- Fill ${this.amountOfWhippedMilk} of the cup by whipped milk;`
      }  
recipeOfCoffee () {
    if (this.piecesOfSugar == 0) return (this.headerOfRecipe() + "\n" + this.stepPlaceCupIntoMachine() + "\n" + this.stepFillCupByEspresso() +"\n" + this.stepAddWhippedMilk() + "\n" +  this.stepDecorateAndServe());
    else return (this.headerOfRecipe() + "\n" + this.stepPlaceCupIntoMachine() + "\n" + this.stepFillCupByEspresso() + "\n" + this.stepAddWhippedMilk() + "\n" + this.stepAddSugar() + "\n" +  this.stepDecorateAndServe());
}
}

// let newMacchiato = new Macchiato ("macchiato")
// console.log(newMacchiato.recipeOfCoffee());

//======================= Cappuccino =================================

export class Cappuccino extends Macchiato {
    constructor (nameOfCoffee,cupVolume,piecesOfSugar) {
        super(nameOfCoffee,cupVolume,piecesOfSugar)
        this.amountOfEspresso = "1/4";
        this.amountOfMilk = "1/4";
        this.amountOfWhippedMilk = "1/2";
    }
stepAddMilk () {
    return `- Fill ${this.amountOfMilk} of the cup by milk;`
  }
recipeOfCoffee () {
    if (this.piecesOfSugar == 0) return (this.headerOfRecipe() + "\n" + this.stepPlaceCupIntoMachine() + "\n" + this.stepFillCupByEspresso() +"\n" + this.stepAddMilk() +"\n" + this.stepAddWhippedMilk() + "\n" +  this.stepDecorateAndServe());
    else return (this.headerOfRecipe() + "\n" + this.stepPlaceCupIntoMachine() + "\n" + this.stepFillCupByEspresso()  +"\n" + this.stepAddMilk() +"\n" + this.stepAddWhippedMilk() + "\n" + this.stepAddSugar() + "\n" +  this.stepDecorateAndServe());
}
}

// let newCappuccino = new Cappuccino ("cappuccino")
// console.log(newCappuccino.recipeOfCoffee());


    
    
    


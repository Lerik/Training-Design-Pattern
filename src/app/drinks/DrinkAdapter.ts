interface IDrinkAdapter {
    naturalDrinks: IDrink;
    sodaDrinks: IDrink;

    showIngredients(drinkName: string, drinkType: string): string;
    showContentAmount(drinkName: string, drinkType: string): string;
    showImage(drinkName: string, drinkType: string): string;
}

class DrinkAdapter implements IDrinkAdapter {
    naturalDrinks: IDrink;
    sodaDrinks: IDrink;

    constructor() {
        this.naturalDrinks = new NaturalDrink();
        this.sodaDrinks = new SodaDrink();
    }
    showIngredients(drinkName: string, drinkType: string): string {
        return drinkType === 'NATURAL' ? this.naturalDrinks.showIngredients(drinkName) : this.sodaDrinks.showIngredients(drinkName);
    }

    showContentAmount(drinkName: string, drinkType: string): string {
        return drinkType === 'NATURAL' ? this.naturalDrinks.showContentAmount(drinkName) : this.sodaDrinks.showContentAmount(drinkName);
    }

    showImage(drinkName: string, drinkType: string): string {
        return drinkType === 'NATURAL' ? this.naturalDrinks.showImage(drinkName) : this.sodaDrinks.showImage(drinkName);
    }
}

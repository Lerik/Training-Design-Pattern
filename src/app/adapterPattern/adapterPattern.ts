interface IDrinkItem {
    name: string;
    type: string;
}

interface IAdapterPattern {
    drinks: IDrinkItem[];
    drinkSelected: number;
    ingredients: string;
    amount: string;
    image: string;
    drinkAdapter: IDrinkAdapter;
    displayInformation(): void;
}

class AdapterPattern implements IAdapterPattern {
    static $inject: any = ['$state'];

    drinks: IDrinkItem[] = [
        {
            name: 'ORANGE JUICE',
            type: 'NATURAL'
        },
        {
            name: 'DR PEPPER',
            type: 'SODA'
        },
        {
            name: 'LEMONADE',
            type: 'NATURAL'
        },
        {
            name: 'COCA COLA',
            type: 'SODA'
        },
        {
            name: 'PEPSI COLA',
            type: 'SODA'
        },
        {
            name: 'SPRITE',
            type: 'SODA'
        },
        {
            name: 'CHERRY JUICE',
            type: 'NATURAL'
        }
    ];

    drinkSelected: number;
    ingredients: string;
    amount: string;
    image: string;
    drinkAdapter: IDrinkAdapter;

    constructor(private $state: any) {
        this.image = 'http://www.sodadispenserdepot.com/pics/sodadispenser228g.jpg';
        this.drinkAdapter = new DrinkAdapter();
    }

    displayInformation(): void {
        if (this.drinkSelected) {
            this.ingredients = this.drinkAdapter.showIngredients(this.drinks[this.drinkSelected].name, this.drinks[this.drinkSelected].type);
            this.amount = this.drinkAdapter.showContentAmount(this.drinks[this.drinkSelected].name, this.drinks[this.drinkSelected].type);
            this.image = this.drinkAdapter.showImage(this.drinks[this.drinkSelected].name, this.drinks[this.drinkSelected].type);
        }
    }

    goBack(): void {
        this.$state.go('app');
    }
}

angular
    .module('app')
    .component('adapterPattern', {
    templateUrl: 'app/adapterPattern/adapterPattern.html',
    controller: AdapterPattern
});

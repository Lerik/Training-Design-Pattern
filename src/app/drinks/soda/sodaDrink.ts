class SodaDrink implements IDrink {
    cola: string = 'COCA COLA';
    pepsi: string = 'PEPSI COLA';
    pepper: string = 'DR PEPPER';
    sprite: string = 'SPRITE';

    showIngredients(drinkName: string): string {
        if (drinkName === this.cola || drinkName === this.pepsi) {
            return 'Carbonated Water, High Fructose Corn Syrup, Caramel Color, \
                    Phosphoric Acid, Natural Flavors, Caffeine. ';
        }

        if (drinkName === this.pepper) {
            return 'Carbonated Water, Sugar, Colour (Caramel E150d), Phosphoric\
                    Acid, Preservative (Potassium Sorbate), Flavourings Including Caffeine,\
                    Sweeteners (Aspartame, Acesulfame K). Contains a Source of Phenylalanine';
        }

        if (drinkName === this.sprite) {
            return 'Carbonated Water, High Fructose Corn Syrup, Citric Acid, Natural\
                     Flavors, Sodium Citrate, Sodium Benzoate';
        }

        return '';
    }

    showContentAmount(drinkName: string): string {
        return '22oz';
    }

    showImage(drinkName: string): string {
        if (drinkName === this.cola) {
            return 'http://cdn.simplymeasured.com/wp-content/uploads/2014/05/Coke.jpg';
        }

        if (drinkName === this.pepsi) {
            return 'http://www.caffeineinformer.com/wp-content/caffeine/pepsi-cola.jpg';
        }

        if (drinkName === this.pepper) {
            return 'http://www.nationwidecandy.com/mmCANDY/Images/S504900_Dr_Pepper_12_oz_Can.jpg';
        }

        if (drinkName === this.sprite) {
            return 'https://square-production.s3.amazonaws.com/files/ff3f6ec2356fcfe9c104f883475d6355/original.jpeg';
        }

        return '';
    }
}

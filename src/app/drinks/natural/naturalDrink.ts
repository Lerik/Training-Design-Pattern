class NaturalDrink implements IDrink {
    orangeJuice: string = 'ORANGE JUICE';
    lemonade: string = 'LEMONADE';
    cherryJuice: string = 'CHERRY JUICE';

    showIngredients(drinkName: string): string {
        if (drinkName === this.orangeJuice) {
            return '100% orange juice from concentrate with calcium & \
                    vitamin d contains pure filtered water, premium concentrated \
                    orange juice, less than 1% of: calcium phosphate* and calcium\
                    lactate* (calcium sources), vitamin D3*.';
        }

        if (drinkName === this.lemonade) {
            return '1 cup white, granulated sugar (can reduce to 3/4 cup)\n \
                    1 cup water (for the simple syrup)\n \
                    1 cup lemon juice\n \
                    2 to 3 cups cold water (to dilute)';
        }

        if (drinkName === this.cherryJuice) {
            return 'Organic Juice and Organic Puree Pressed from Fresh Whole \
                    Ripe Certified Organic Black (Dark Sweet) Cherries. ';
        }

        return '';
    }

    showContentAmount(drinkName: string): string {
        if (drinkName === this.orangeJuice) {
            return '30oz';
        }

        if (drinkName === this.lemonade) {
            return '35oz';
        }

        if (drinkName === this.cherryJuice) {
            return '45oz';
        }

        return '';
    }

    showImage(drinkName: string): string {
        if (drinkName === this.orangeJuice) {
            return 'http://canigivemybaby.com/wp-content/uploads/2011/12/can-i-give-my-baby-orange-juice.jpg';
        }

        if (drinkName === this.lemonade) {
            return 'http://www.gannett-cdn.com/-mm-/a5f6f54a42bcc6f0b93aae82a587c569c389fa06/c=0-0-2127-2836&r=537&c=0-0-534-712/local/-/media/2015/07/02/Nashville/B9317940184Z.1_20150702140919_000_GGSB8FJ43.1-0.jpg';
        }

        if (drinkName === this.cherryJuice) {
            return 'http://img.aws.livestrongcdn.com/ls-article-image-400/cme/cme_public_images/www_livestrong_com/photos.demandstudios.com/getty/article/144/249/185854960_XS.jpg';
        }

        return '';
    }
}

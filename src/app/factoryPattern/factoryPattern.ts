interface IFactoryPattern {
    brandFactory: ICarBrandFactory;
    brandTitle: string;
    brandImageUrl: string;
    brandInformation: string;
    brands: string[];
    brandSelected: string;

    getInformationFromBrandSelected(): void;
}

class FactoryPattern implements IFactoryPattern {
    static $inject: any = ['$state'];
    brandFactory: ICarBrandFactory;
    brandTitle: string;
    brandImageUrl: string;
    brandInformation: string;
    brands: string[] = ['NISSAN', 'FORD', 'TOYOTA', 'HYUNDAI'];
    brandSelected: string;

    constructor(private $state: any) {
        this.brandFactory = new CarBrandFactory();
    }

    getInformationFromBrandSelected(): void {
        if (!this.brandSelected) {
            return;
        }
        var information: string[] = this.brandFactory.getAllBrandInformation(this.brandSelected);

        this.brandTitle = information[0];
        this.brandImageUrl = information[1];
        this.brandInformation = information[2];
    }

    goBack(): void {
        this.$state.go('app');
    }
}

angular
    .module('app')
    .component('factoryPattern', {
    templateUrl: 'app/factoryPattern/factoryPattern.html',
    controller: FactoryPattern
});


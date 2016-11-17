interface ICarBrandFactory {
    nissan: ICarBrand;
    ford: ICarBrand;
    toyota: ICarBrand;
    hyundai: ICarBrand;
    getAllBrandInformation(brand: string): string[];
}

class CarBrandFactory implements ICarBrandFactory {
    nissan: ICarBrand;
    ford: ICarBrand;
    toyota: ICarBrand;
    hyundai: ICarBrand;

    constructor() {
        this.nissan = new Nissan();
        this.ford = new Ford();
        this.toyota = new Toyota();
        this.hyundai = new Hyundai();
    }

    getAllBrandInformation(brand: string): string[] {
        var brandTitle: string = '';
        var brandImagePath: string = '';
        var brandInformation: string = '';

        if (brand === 'NISSAN') {
            brandTitle = this.nissan.getBrandTitle();
            brandImagePath = this.nissan.getBrandImagePath();
            brandInformation = this.nissan.getBrandInformation();
        }

        if (brand === 'FORD') {
            brandTitle = this.ford.getBrandTitle();
            brandImagePath = this.ford.getBrandImagePath();
            brandInformation = this.ford.getBrandInformation();
        }

        if (brand === 'TOYOTA') {
            brandTitle = this.toyota.getBrandTitle();
            brandImagePath = this.toyota.getBrandImagePath();
            brandInformation = this.toyota.getBrandInformation();
        }

        if (brand === 'HYUNDAI') {
            brandTitle = this.hyundai.getBrandTitle();
            brandImagePath = this.hyundai.getBrandImagePath();
            brandInformation = this.hyundai.getBrandInformation();
        }

        return [brandTitle, brandImagePath, brandInformation];
    }
}

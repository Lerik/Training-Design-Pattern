class Toyota implements ICarBrand {
    getBrandTitle(): string {
        return 'TOYOTA';
    }

    getBrandImagePath(): string {
        return 'http://d1r57ja1amoclf.cloudfront.net/wp-content/uploads/2014/04/Toyota-Logo.jpg';
    }

    getBrandInformation(): string {
        return 'Toyota is the world\'s market leader in sales of hybrid electric vehicles, and one of the largest companies to encourage the mass-market adoption of hybrid vehicles across the globe. Cumulative global sales of Toyota and Lexus hybrid passenger car models passed the 9 million milestone in April 2016.';
    }
}

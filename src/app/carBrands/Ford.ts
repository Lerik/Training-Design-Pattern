class Ford implements ICarBrand {
    getBrandTitle(): string {
        return 'FORD';
    }

    getBrandImagePath(): string {
        return 'http://www.carlogos.org/logo/Ford-logo-1976-1366x768.jpg';
    }

    getBrandInformation(): string {
        return 'It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles under the Ford brand and most luxury cars under the Lincoln brand. Ford also owns Brazilian SUV manufacturer, Troller, and Australian performance car manufacturer FPV. In the past it has also produced tractors and automotive components.';
    }
}

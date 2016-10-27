interface IIteratorPattern {
    text: string;
    allContents: string;
    textContainer: IIterator;
    addNewText(): void;
    showContents(): void;
    clear(): void;
}

class IteratorPattern implements IIteratorPattern {
    static $inject: any = ['$state'];
    text: string;
    allContents: string;
    textContainer: IIterator;

    constructor(private $state: any) {
        this.textContainer = new TextContainer();
    }

    addNewText(): void {
        if (this.text && this.text.length) {
            this.textContainer.addText(this.text);
            this.text = '';
            this.showContents();
        }
    }

    showContents(): void {
        var contents: string = '';

        while (this.textContainer.hasNext()) {
            contents += this.textContainer.next() + '\n';
        }

        this.textContainer.restart();
        this.allContents = contents;
    }

    clear(): void {
        this.text = '';
    }

    goBack(): void {
        this.$state.go('app');
    }
}

angular
    .module('app')
    .component('iteratorPattern', {
    templateUrl: 'app/iteratorPattern/iteratorPattern.html',
    controller: IteratorPattern
});

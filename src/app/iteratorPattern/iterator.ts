interface IIterator {
    contents: string[];
    index: number;
    restart(): void;
    hasNext(): boolean;
    next(): string;
    addText(text: string): void;
}

class TextContainer implements IIterator {
    contents: string[];
    index: number;

    constructor() {
        this.contents = [];
        this.restart();
    }

    restart(): void {
        this.index = 0;
    }

    hasNext(): boolean {
        return this.index < this.contents.length;
    }

    next(): string {
        if (this.hasNext()) {
            var currentIndex: number = this.index;
            this.index++;
            return this.contents[currentIndex];
        }
        return undefined;
    }

    addText(text: string): void {
        this.contents.push(text);
    }
}

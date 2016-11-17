interface ICommandPattern {
    commands: ICommand[];
}

class CommandPattern implements ICommandPattern {
    static $inject: any = ['$state'];
    commands: ICommand[];

    constructor(private $state: any) {
        this.commands = [
            new AlertOne(),
            new AlertTwo(),
            new AlertThree(),
            new AlertFour()
        ];
    }

    goBack(): void {
        this.$state.go('app');
    }
}

angular
    .module('app')
    .component('commandPattern', {
    templateUrl: 'app/commandPattern/commandPattern.html',
    controller: CommandPattern
});

class AlertThree implements ICommand {
    actions: IActions;

    constructor() {
        this.actions = new Actions();
    }

    execute(): void {
        this.actions.displayEntertainmentNews();
    }
}

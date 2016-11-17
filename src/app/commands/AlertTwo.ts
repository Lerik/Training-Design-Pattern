class AlertTwo implements ICommand {
    actions: IActions;

    constructor() {
        this.actions = new Actions();
    }

    execute(): void {
        this.actions.displayEconomicsNews();
    }
}

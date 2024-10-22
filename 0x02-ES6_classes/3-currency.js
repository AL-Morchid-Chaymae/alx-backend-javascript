export default class Currency {
    constructor() {
        this._name = 'Dollars';
        this._code = '$';
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`; // Retourner le format souhaité
    }
}


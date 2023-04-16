class Shopper {
    constructor(name, money, employer) {
        this._name = name
        this._money = money
    }

    payday = (money) => {
        this._money += money
    }
}

module.exports = Shopper
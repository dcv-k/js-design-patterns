class Employee {
    constructor(name, money, employer) {
        this._name = name
        this._money = money
        this.employer = employer
    }

    payday = (money) => {
        this._money += money
    }
}

module.exports = Employee
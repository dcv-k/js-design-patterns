const Employee = require("./Employee")
const Shopper = require("./Shopper")

const userFactory = (name, money, type, employer) => {
    if (type === "employee") {
        return new Employee(name, money, employer)
    } else if (type === "shopper") {
        return new Shopper(name, money)
    }
}

module.exports = userFactory
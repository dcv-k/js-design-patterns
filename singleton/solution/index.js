const Logger = require("./Logger")
const Shopper = require("./Shopper")
const Store = require("./Store")

const logger = new Logger().getInstance()

logger.log("Starting app...")

const shopper = new Shopper("chandrabhanu", 10000)

const store = new Store("bhanu org", [
    {
        item: "cell phone",
        qty: 5,
        price: 20
    },
    {
        item: "LG monitor",
        qty: 20,
        price: 30
    }
])

logger.log("finished config...")

console.log(`${logger.count} logs total.`)
logger.logs.map(log => console.log(`${log.message}`))
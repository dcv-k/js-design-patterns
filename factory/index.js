const userFactory = require("./userFactory")

const user1 = userFactory("sana", 100, "employee", "jyp")
const user2 = userFactory("jisoo", 200, "shopper")

console.log(JSON.stringify(user1))
console.log(JSON.stringify(user2))

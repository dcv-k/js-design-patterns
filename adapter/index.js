const localStorage = require("./LocalStorage")

console.log("localStorage length: ", localStorage.getLength())

const uid = localStorage.getItem("user_id")

console.log("user_id", uid)

if (!uid) {
    console.log("User ID not found. Setting the user id and token...")
    localStorage.setItem("token", "jfka99aflkDfka0ldaf3klfa")
    localStorage.setItem("user_id", "12345")
} else {
    console.log("User ID found", uid)
    console.log("clearing the user ID...")
    localStorage.clear()
}
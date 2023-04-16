const { writeFile, existsSync, readFileSync, unlink } = require("fs")

class LocalStorage {
    constructor() {
        if (existsSync("localStorage.json")) {
            console.log("loading items form localStorage.json")
            const text = readFileSync("localStorage.json")
            this._items = JSON.parse(text)
        } else {
            this._items = {}
        }
    }

    getLength = () => {
        return Object.keys(this._items).length
    }

    getItem = (key) => {
        return this._items[key]
    }

    setItem = (key, val) => {
        this._items[key] = val
        writeFile("localStorage.json", JSON.stringify(this._items), err => {
            if (err) {
                console.log(err)
            }
        })
    }

    clear = () => {
        this._items = {}
        unlink("localStorage.json", () => {
            console.log("localStorage.json file removed")
        })
    }
}

module.exports = new LocalStorage()
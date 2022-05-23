const mongoose = require("mongoose");
const url = "";

mongoose.connect(url)

const db = mongoose.connection
db.on("error", console.log.bind(console, "error al conectar MongoDB"))
db.once("open", function callback() {
    console.log("Conectado a MongoDB! ")
})

module.exports = db
const mongoose = require("mongoose");
const url =
    "mongodb+srv://juan:juan1234@cluster0.waccd.mongodb.net/IngSoftware1?retryWrites=true&w=majority";

mongoose.connect(url)

const db = mongoose.connection
db.on("error", console.log.bind(console, "error al conectar MongoDB"))
db.once("open", function callback() {
    console.log("Conectado a MongoDB! ")
})

module.exports = db
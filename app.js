const express = require("express");
const app = express();
const db = require("./db")
const user = require("./routes/user")
const pqrs = require("./routes/pqrs");
const table = require("./routes/table");

app.set("view engine", "ejs"); /* setear el motor de plantillas*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", user);
app.use("/", pqrs);
app.use("/", table);

app.get("/", function(req, res) {
    // Rendering index.ejs page
    res.render("../public/views/index");
});

app.listen(3000, () => {
    console.log(
        "El servidor esta inicializado en el puerto 3000, http://localhost:3000 "
    );
});
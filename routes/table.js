const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userModel = require("../model/user"); //aqui se usa para mostralo en postman
const userController = require("../controllers/userController"); //aqui se usa para mostrarlo en la terminal de VSC
const tableController = require("../controllers/tableController");

/*
router.get("/user", (req, res) => {
    userModel
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
*/


//Obtener todos los PQRS (GET)
router.get("/table", tableController.mostrar);


//Editar PQRS (PUT)
router.post("/editar", tableController.editar);


//Borrar PQRS (Delete)
router.get("/borrar/:id", tableController.borrar);


module.exports = router;
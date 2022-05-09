const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const PQRSModel = require("../model/pqrs"); //aqui se usa para mostralo en postman
const PQRSController = require("../controllers/pqrsController"); //aqui se usa para mostrarlo en la terminal de VSC

/*
router.get("/user", (req, res) => {
    PQRSModel
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
*/

//Crear todos los PQRs (GET)
router.get("/pqrs", PQRSController.mostrar);

//Crear PQRS (POST)
router.post("/crear", PQRSController.crear);

module.exports = router;
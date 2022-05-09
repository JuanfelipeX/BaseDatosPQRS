const mongoose = require("mongoose");

const pqrsController = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },

    correo: {
        type: String,
        required: true,
    },

    telefono: {
        type: Number,
        required: true,
    },

    tipoId: {
        type: String, //fix esto esta en una label con varias opciones
        required: true,
    },

    numeroId: {
        type: Number,
        required: true,
    },

    tipoRadicado: {
        type: String, //fix esto esta en una label con varias opciones
        required: true,
    },

    comentarios: {
        type: String,
    },

    anexo: {
        type: String, // esto deberia ser tipo file
    }
});

module.exports = mongoose.model("pqrs", pqrsController);
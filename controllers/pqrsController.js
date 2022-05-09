const pqrs = require("../model/pqrs");

//mostrar
module.exports.mostrar = (req, res) => {
    pqrs.find({}, (error, datos) => {
        if (error) {
            return res.status(500).json({
                message: "error al mostrar los pqrs",
            });
        }
        return res.render("../public/views/PQRS", { datos: datos });
        //console.log(datos)
    });
};

//crear
module.exports.crear = (req, res) => {


    const entrada = new pqrs({
        nombre: req.body.nombre,
        correo: req.body.email,
        telefono: req.body.telefono,
        tipoId: req.body.tipoId,
        numeroId: req.body.numeroId,
        tipoRadicado: req.body.tipoRadicado,
        comentarios: req.body.comentarios,
        anexo: req.body.anexo,
    });

    entrada.save(function(error, entrada) {
        if (error) {
            return res.status(500).json({
                message: "Error al crear el PQRS"
            })
        }
        res.redirect("/table")
    })


    //console.log(req.body)
};
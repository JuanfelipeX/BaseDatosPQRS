const table = require("../model/pqrs");

//mostrar 
module.exports.mostrar = (req, res) => {
    table.find({}, (error, datos) => {
        if (error) {
            return res.status(500).json({
                message: "Error al mostrar la tabla",
            });
        }
        return res.render("../public/views/table", { datos: datos });
        //console.log(datos)
    });
};


//Editar datos del PQRS
module.exports.editar = (req, res) => {

    const id = req.body.id_editar;
    const nombre = req.body.nombre_editar;
    const correo = req.body.email_editar;
    const telefono = req.body.telefono_editar;
    const tipoId = req.body.tipoId_editar;
    const numeroId = req.body.numeroId_editar;
    const tipoRadicado = req.body.tipoRadicado_editar;
    const comentarios = req.body.comentarios_editar;
    const GeoSchema = req.body.GeoSchema;
    //const anexo = req.body.anexo_editar

    table.findByIdAndUpdate(
        id, {
            nombre,
            correo,
            telefono,
            tipoId,
            numeroId,
            tipoRadicado,
            comentarios,
            GeoSchema
        },
        (error, datos) => {
            if (error) {
                return res.status(500).json({
                    message: "Error al actualizar el PQRS " + error
                });
            }
            res.redirect("/")
        });

    //console.log(req.body)
};


module.exports.borrar = (req, res) => {
    const id = req.params.id
    table.findByIdAndRemove(id, (error, datos) => {
        if (error) {
            return res.status(500).json({
                message: "Error al borrar el PQRS " + error
            });
        }
        res.redirect("/")
    });
}
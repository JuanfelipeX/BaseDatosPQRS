const user = require("../model/user")

//mostrar
module.exports.mostrar = (req, res) => {
    user.find({}, (error, users) => {
        if (error) {
            return res.status(500).json({
                message: "error al mostrar los users"
            })
        }
        return res.render("../public/views/index", { users: users });
        //console.log(users)
    })
}


//validar correo y contrasenia
module.exports.validar = (req, res) => {

    user.findOne({
            $and: [
                { correo: req.body.inputEmail },
                { contrasena: req.body.inputPassword },
            ],
        },

        (err, result) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (!result) {
                data = {
                    meta: {
                        status: "Fallido",
                        message: "Inicio de Sesion, Fallido, Porfavor revise el Usuario o Contraseña",
                    },
                };
                res.status(401).send(data);

            } else {
                data = {
                    meta: {
                        status: "success",
                        message: "Login success",
                    },
                };
                //res.json(data);
                res.redirect("/pqrs");
            }
        }
    );


}
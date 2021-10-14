const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./../models/User");
const {validationResult}=require("express-validator")//conj. de errores que sucedan de los checks de la ruta 

exports.createUser = async (req, res) => {

    //Revision de validaciones
    const errors=validationResult(req)//req.busca la propiedad de los errores
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(400).json({
            msgError: errors.array() // para mandar un arreglo de errores
        })
    }


  //datos del formulario
  const { username, email, password } = req.body;

  //encriptacion
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = await User.create({
      username,
      email,
      hashedPassword, // aqui ya lo convirtió
    });
    const payload = {
      user: {
        id: newUser._id,
      },
    };

    // B. FIRMAR POR EL SERVIDOR LA CREDENCIAL
    jwt.sign(
      payload, // TODOS LOS DATOS DE LA CREDENCIAL
      process.env.SECRET, // FIRMA DEL SERVIDOR
      {
        expiresIn: 3600000, // SEGUNDOS
      },
      (error, token) => {
        console.log(error);

        if (error) {
          return res.status(401).json({
            msgError: "Hubo un problema en la creación del token.",
          });
        }

        return res.json({
          data: {
            token,
          },
        });
      }
    );
  } catch (error) {
    console.log(error)

    res.status(500).json({
        msgError: "Hubo un problema creando el usuario."
    })
  }
};

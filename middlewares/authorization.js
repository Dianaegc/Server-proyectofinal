//Este archico me servirá para desencriptar el token y así que coincida con la palabra secreta que tengo.

//IMPORTACIONES
const jwt       = require("jsonwebtoken")


// 2. FUNCIÓN
const unlockingToken = (req, res, next) => { // desencriptar el token

    const token = req.header("x-auth-token")
    if(!token){
        return res.status(401).json({
            msgError: "No hay un token o es erróneo. Permiso no válido."
        })
    }
    try {
        const openToken = jwt.verify(token, process.env.SECRET)//abrirlo con la llave secreta

        req.user = openToken.user

        next()
        
    } catch (error) {

        console.log(error)

        return res.status(500).json({
            msgError: "Hubo un error en el proceso de token."
        })

    }


   

    

}

// 3. EXPORTACIÓN
module.exports = unlockingToken





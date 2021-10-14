// ./routes/users.js

const express = require("express");
const router = express.Router();

const { check } = require("express-validator"); //Libreria que me permite hacer validaciones de manera sencilla

const usersController = require("./../controllers/usersControlller");

//VALIDACIONES

//USER -POST - CREAR UN USUARIO
router.post("/create",

//arreglo de funciones - como tengo varias validaciones los junto en un middleware
    [
        check("username", "El nombre es obligatorio.").not().isEmpty(), // VERIFICAR QUE UNA CASILLA NO ESTÉ VACÍA
        check("email", "Agrega un email válido").isEmail(),
        check("password", "El password debe ser mínimo de 6 caracteres").isLength({ min: 6 })
    ]
, usersController.createUser)


  usersController.createUser


module.exports = router;

// ./routes/auth.js

const express       = require("express")
const router        = express.Router()

const authController        = require("./../controllers/authController")

const authorization = require("./../middlewares/authorization")
const {check} = require ('express-validator')


router.post("/login",[
check("email","Ingresa un email válido.").isEmail(),
check("password","No enviaste un password adecuado.").not().isEmpty()
],authController.loginUser)
router.get("/verifying-token", authorization, authController.verifyingToken)



module.exports = router


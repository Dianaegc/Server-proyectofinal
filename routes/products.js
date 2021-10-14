const express = require('express');
const router = express.Router();
const productsController =require('../controllers/productsController')

//GET -PRODUCTS - OBTENER TODOS LOS PRODUCTOS
router.get("/get-all",productsController.getAllProducts)
//POST -PRODUCTS - CREAR UN PRODUCTO NUEVO
router.post("/create",productsController.createProduct)

router.put("/update",productsController.updateProduct)
router.delete("/delete",productsController.deleteProduct)

module.exports= router
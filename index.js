//IMPORTACIONES
const express = require("express")
const app = express()

const cors = require("cors")
const connectDB = require("./config/db")

//varibles de entorno 
require("dotenv").config()
//BASE DE DATOS
connectDB()
//MIDDLEWARES
app.use(cors())
app.use(express.json({ extended: true }))




//RUTAS
app.use("/api/products", require("./routes/products.js"))
app.use("/api/users",require("./routes/users"))
app.use("/api/auth", require("./routes/auth.js"))



//SERVIDOR

app.listen(process.env.PORT, () => {
    console.log("Nuestro servidor está activo en puerto: ",process.env.PORT) 
})
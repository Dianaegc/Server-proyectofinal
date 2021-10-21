// 1. IMPORTACIONES
const mongoose = require("mongoose");

// 2. SCHEMA
const productsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pictureUrl: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  available: {
    type: Boolean,
    required: true,
    default: true,
  },
  details: {
    type: [String],
    required: false,
  },
});

// 3. MODELO
const Product = mongoose.model("Product", productsSchema);

// 4. EXPORTACIÓN
module.exports = Product;

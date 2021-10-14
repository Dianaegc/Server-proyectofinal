const Product = require("./../models/Products");
exports.getAllProducts = async (req, res) => {
  //res.send("Hola mundo")
  try {
    const products = await Product.find({});
    console.log(products);
    return res.json({
      data: products,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      errorMsg:
        "Hubo un error interno.Estamos arregládolo lo más pronto posible.",
    });
  }
};
exports.createProduct = async (req, res) => {
  //obetner los datos del formulario

  const { name, pictureUrl, price, description } = req.body;

  try {
    const newProduct = await Product.create({
      name,
      pictureUrl,
      price,
      description,
    });
    return res.json({
      data: newProduct,
      msg: "Producto creado de manera exitosa.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errorMsg: "Hubo un error al crear el producto ",
    });
  }
};
exports.updateProduct = async (req, res) => {
  const { id, name, pictureUrl, price, description, available } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        pictureUrl,
        price,
        description,
        available,
      },
      { new: true }
    ); //me va a mandar el producto actualizado en el json
    return res.json({
      data: updatedProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msgError: "Hubo un error acualizando el producto",
    });
  }
};
exports.deleteProduct = async (req, res) => {
  const { id } = req.body;
  try{
    const deletedProduct=await Product.findByIdAndRemove({_id:id})
    return res.json({
        data:deletedProduct,
        msg:"Este producto fue borrado exitosamente."
    })
  }catch(error){
      console.log(error);
      return res.status(500).json({
          msgError:"Hubo un error borrando el producto."
      })
  }
};

const Products = require('../model/Product')

async function getAllProducts(req, res) {

    const allProducts = await Products.find({});
    res.json({ message: "success", allProducts })

};

module.exports = {
    getAllProducts
}
const Product = require('../model/Product')

async function getAllProducts(req, res) {

    const allProducts = await Product.find({});
    res.json({ message: "success", allProducts })

};

async function addNewProduct(req, res) {
    
    try {
        
        const {
            productId,
            brand,
            description,
            categories,
            images,
            items,
        } = req.body;

        const newProduct = new Product({
            productId,
            brand,
            description,
            categories,
            images,
            items,
        })

        let savedProduct = await newProduct.save()
        res.send(savedProduct)
        
    } catch (e) {

        console.log("nope");

    }
};

module.exports = {
    getAllProducts,
    addNewProduct
}
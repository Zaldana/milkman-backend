var express = require('express');
var router = express.Router();

const {
    getAllProducts,
    addNewProduct
} = require("./controller/productsController");

router.get(
    "/",
    getAllProducts
);

router.post(
    "/add",
    addNewProduct
);

module.exports = productsRouter;
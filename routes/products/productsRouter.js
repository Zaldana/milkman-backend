var express = require('express');
var router = express.Router();

const {
    getAllProducts,
} = require("./controller/productsController");

router.get(
    "/",
    getAllProducts
);

module.exports = router;
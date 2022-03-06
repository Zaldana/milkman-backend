const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(

    {
        upc: {
            type: String
        },

        productId: {
            type: String
        },

        aisleLocations: {
            type: Array
        },

        brand: {
            type: String
        },

        categories: {
            type: Array
        },

        description: {
            type: String
        },

        images: {
            type: Array
        },

        items: {
            type: Array
        },

        itemInformation: {
            type: Object
        },

        temperature: {
            type: Object
        },
    },
);

module.exports = mongoose.model("Product", ProductSchema);
const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(    
    {
        regular: {
            type: Number
        }
    }
)

const itemsSchema = new mongoose.Schema(
    {
        price: {
            type: priceSchema
        },

        size: {
            type: String
        }
        
    } 
)

const sizesSchema = new mongoose.Schema(
    {
        size: {
            type: String,
            default: "large"
        },

        url: {
            type: String
        }
    }
)

const imagesSchema = new mongoose.Schema(
    {
        perspective: {
            type: String,
            default: "front"
        },

        sizes: [sizesSchema]
    }
)
const ProductSchema = new mongoose.Schema(
    {
        productId: {
            type: String
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

        images: [imagesSchema],

        items: [itemsSchema]
    },
);

module.exports = mongoose.model("Product", ProductSchema);
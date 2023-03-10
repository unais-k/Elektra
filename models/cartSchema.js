const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
            },
            quantity: {
                type: Number,
                default: 1,
            },
            totalPrice: {
                type: Number,
            },
            date: {
                type: Date,
                defualt: Date.now(),
            },
        },
    ],
    cartPrice: {
        type: Number,
        defualt: 0,
    },
});

const cartModel = mongoose.model("Cart", cartSchema);
module.exports = cartModel;

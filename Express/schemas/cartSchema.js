import mongoose from "mongoose"

// second step to making schema------------------------------------------------------


const cartSchema = new mongoose.Schema({
    itemId: {
        type: Number,
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    }
})

// third step to making mode
const Cart = mongoose.model('Cart', cartSchema)


export default Cart




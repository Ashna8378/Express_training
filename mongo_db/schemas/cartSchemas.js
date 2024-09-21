import mongoose from 'mongoose'

// second step to making schemas


const cartSchema = new mongoose.Schema({
   
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


// third step to making model

const Cart = mongoose.model('Cart', cartSchema)

export default Cart




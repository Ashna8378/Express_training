
import {validationResult} from "express-validator"

import Cart from "../schemas/cartSchema.js";

let cart = [
    { itemId: 1, itemName: "Item A", quantity: 2, price: 100 },
    { itemId: 2, itemName: "Item B", quantity: 1, price: 200 },
    { itemId: 3, itemName: "Item C", quantity: 4, price: 50 },
];


function getData(req, res){
    res.json(cart);
    // const carts = await Cart.find({})
}

const createData = (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }

    const { itemId, itemName, quantity, price } = req.body;
    if (!itemId || !itemName || !quantity || !price) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    cart.push({ itemId, itemName, quantity, price });
    res.status(201).json({ message: 'Item added to cart', cart });
}


const updateData = (req, res) => {
    const { itemId, itemName, quantity, price } = req.body;
    const itemIndex = cart.findIndex(item => item.itemId === itemId);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    cart[itemIndex] = { itemId, itemName, quantity, price };
    res.json({ message: 'Item updated', cart });
}


const DeleteData = (req, res) => {
    const itemId = req.body.itemId;  // Extract itemId from the request body

    cart = cart.filter(item => item.itemId !== itemId);

    console.log('Item deleted');
    res.json({ message: 'Item deleted' });
}
// third step-------------

async function createCart(req,res){
    const cart = req.body
    // let newCart = new Cart(cart)
    console.log(cart)
    // newCart = await newCart.save()
    
    res.status(200).json(cart)
}


export {getData, createData, updateData, DeleteData, createCart}






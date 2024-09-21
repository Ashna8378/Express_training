import Cart from '../schemas/cartSchemas.js'


// let cart = [
//     { itemId: 1, itemName: "Item A", quantity: 2, price: 100 },
//     { itemId: 2, itemName: "Item B", quantity: 1, price: 200 },
//     { itemId: 3, itemName: "Item C", quantity: 4, price: 50 },
// ];


async function getCart(req, res){
    
    const decodedData = req.jwtData
    const carts = await Cart.find()
    res.status(200).json(carts)
}


async function getCartById(req, res){
    const id = req.params.id
    const cart =await Cart.findById(id)
    res.status(200).json(cart)
}


async function createCart(req, res){
    const cart = req.body
    const newCart = new Cart(cart)
    console.log(newCart)
    await newCart.save()
    res.status(200).json('Note Created')

}

async function updateCart(req, res){
    const id = req.params.id

    const {itemName, quantity, price} = req.body

    const cart = await Cart.findByIdAndUpdate(id, {itemName, quantity, price})
    
    res.status(200).json(cart)
}

async function deleteCartById(req, res){
    const id = req.params.id

    const deleteCart = await Cart.findByIdAndDelete(id)
    res.status(200).json(deleteCart)
}





export { getCart, createCart, getCartById, updateCart, deleteCartById }


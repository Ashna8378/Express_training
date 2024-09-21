import express from 'express'

import { getCart, createCart, getCartById, updateCart, deleteCartById} from '../controller/cartController.js'
 

const router = express.Router()

router.get('/get', getCart)

router.get('/get/:id', getCartById)

router.post('/create',createCart)

router.put('/update/:id',updateCart)

router.delete('/delete/:id',deleteCartById)

export default router



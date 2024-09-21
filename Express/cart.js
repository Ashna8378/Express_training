import express from 'express';
import { getData, createData, updateData, DeleteData, createCart } from './controller/Cartcontroller.js';
const router = express.Router();
import { checkSchema } from 'express-validator';

const createValidator = {
    itemId:{
        in:["body"],
        isInt:{
           errorMessage:"id should be in integer"
        },
        itemName: {
            in: ['body'],
            isString: {
                errorMessage: 'name should be a string'
            },
        },
        quantity: {
            in: ['body'],
            isInt: {
                errorMessage: 'quantity should be an integer'
            },
            
        },
        price: {
            in: ['body'],
            isFloat: {
                errorMessage: 'price should be a float'
            },
            
        }

}
}


router.get('/cart', getData)


router.post('/cart/create',createData);


router.put('/cart/update',updateData);

router.post('/cart',createCart )

router.delete('/cart/delete',DeleteData );


export default router;


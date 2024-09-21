import express from 'express'
// import session from 'express-session';

import verifyJwt from './middleware/tokenVerify.js';
import mongoose from "mongoose";
import MongoStore from 'connect-mongo';

import cartRouter from './router/cartRouter.js'

import userRouter from './router/userRouter.js'

const url = `mongodb://localhost:27017/user`

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))



mongoose.connect(url)
.then(()=> console.log('connected to Mongodb'))
.catch(()=>console.log('connected to mongodb failed'))

// middleware to use session-------------------------------------

// app.use(session({
//     secret: "ashna123",
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge: 60000*5},
//         store: MongoStore.create({
//             client: mongoose.connection.getClient()
//         }) 

// }))


app.use('/user', userRouter)

app.use('/cart',verifyJwt, cartRouter)



const PORT = 4000
app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`)
})








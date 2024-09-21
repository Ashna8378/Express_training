import express from 'express';
import cartRouter from './cart.js';
// import session from 'express-session';
import mongoose from 'mongoose';
// import logging from './middleware/logger.js';
// import errorHandler from './middleware/errorHandler.js';
// import allErrorHandler from "./middleware/allErrorHandlre.js"

const app = express();
// const PORT = process.env.PORT 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// first step to connceting mongodb------------------------------

mongoose.connect(`mongodb://localhost:27017/cart`)
.then(()=> console.log("connected to Mongodb"))
.catch((err)=>console.log("connection to MongoDb failed",err))
 

// middleware to use session-----------------------------------------------

// app.use(session({
//     secret: "ashna123",
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge: 60000*5,

//     }
// }))




// logger middleware------------------------------------------------------------

// app.use(logging)

app.use('/api', cartRouter);

// app.use(errorHandler)

// Error handler middleware----------------------------------------


// app.use(allErrorHandler)


const PORT=4000
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});




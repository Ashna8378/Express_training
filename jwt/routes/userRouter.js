import { Router } from "express";

import jwt from 'jsonwebtoken'

const userRouter = Router()

const users = []

const SECRET_KEY = "ashna123"


userRouter.get('/get',(req,res)=>{
    res.send(users)
})

userRouter.post('/register', (req, res)=>{
    const {username, password} = req.body
    

    if(!username || !password){
        return res.status(400).json({message: "username and password are required"})
    }

    users.push({username, password})
    return res.status(201).json({message: "User registered successfully"})

})

userRouter.post('/login', (req,res)=>{
     const data = req.body
     console.log(data)
     console.log(users)

     if(!data.username || !data.password){
        return res.status(400).end()

     }



     const user = users.find(user => user.username == data.username)

    if(!user || user.password !== data.password){
        res.status(401).json({msg: "invalid credentials"})
    }
    
    const tokenData = {
        username : data.username,
    }

    const token = jwt.sign(tokenData,SECRET_KEY)

    res.status(200).json({msg: "Logged in", token})
})





export default userRouter;
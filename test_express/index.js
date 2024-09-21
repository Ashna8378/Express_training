import express from "express"
import logging from "./middlewares/routeindex.js"
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))


const users = [
    {id: 1,"username": 'aditya',password: 'aditya123'},
    {id: 2,"username": 'ashna',password: 'ashna8378'},
    {id: 3,"username": 'banku',password: 'ashna5678'},
]

app.get("/user",logging,function(req,res){
    res.json(users)
})



app.post("/user/register",logging,function(req,res){
    // console.log(req)

    const user = req.body
    console.log(user)
    
      users.push(user)
      res.json({msg:"registration succcessful"})

})


app.post("/user/login",logging,function(req,res){
    // console.log(req)
    const username = req.body.username
    const password = req.body.password
   
    console.log(username)
    console.log(password)

    const user = users.find(user => user.username == username && user.password == password)

    if(user){
        res.json({msg:"login successfully"})
    }
    else{
        res.status(404).json({msg:"invalid username and password"})
    }
    // console.log(user)



})


app.listen(3000,function(req,res){
    console.log(`Server is running on the port 3000`)
})


import express from "express"
import logging from "./middlewares/routeindex.js"

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

let todos = [
    {id:1,title: "Grocery Shopping",completed: false},
    {id:2,title: "sports shopping",completed: false},
    {id:3,title: "clothes Shopping",completed: false},
]

app.get("/todo",logging,function(req, res){
   res.json(todos)
})


app.post("/todo/create",logging,function(req,res){
    const todo = req.body
    console.log(todo)

    todos.push(todo)
    res.json({msg:"successfully added todo item"})

})



app.post("/todo/update/:id",logging,function(req,res){
    
    const id = Number(req.params.id)


    const title = req.body.title
    const completed = req.body.completed

    const todoIndex = todos.findIndex( todo => todo.id == id)


    if(todoIndex){
        return res.json({msg:"updated successfully"})
    }

   todos[todoIndex].title = title 
   todos[todoIndex].completed = completed

   res.json(todos)

})

app.delete("/todo/delete/:id",logging,function(req,res){
      
    let id = Number(req.params.id)
    todos = todos.filter(todo => todo.id != id)
    console.log(todos)
    
    res.json({msg:"item deleted successfully "})

})





app.listen(4000,function(req,res){
    console.log("Server is running on the port 4000")
})
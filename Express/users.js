import express from "express"
const app = express()

let users = [
    {id: 1,username: "banku",email: "banku@gmail.com"},
    {id: 2,username: "ahanchal",email: "chanchal@gmail.com"},
    {id: 3,username: "ashna",email: "ashna@gmail.com"},
    {id: 4,username: "priya",email: "priya@gmail.com"}
]

app.get("/users",function(req,res){
    // console.log(req.query)
    const limit = req.query.limit
    const order=req.query.order
    console.log(order)
    console.log(limit)
    let sortedUsers = [...users];
    if (order === "asc") {
        sortedUsers.sort((a, b) => a.username.localeCompare(b.username));
    } else if (order === "desc") {
        sortedUsers.sort((a, b) => b.username.localeCompare(a.username));
    }

    if(limit != undefined && limit >= 0){
       return  res.json(users.slice(0,limit))
    }

    res.json(sortedUsers);
  
})


app.get("/users/:id",function(req,res){
    const id = (req.params.id)
    console.log(id)
    const user = users.filter(user => user.id == id)
    if(user.length === 0){
        return res.status(404).json({msg: "Notes"})
    }
    res.json(user)

})

app.listen(4000,function(){
    console.log("Server is running on port 4000")
})

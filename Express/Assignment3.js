import express from "express"
const app = express()

const PORT = process.env.PORT

// Parse requests JSON data and converts it to object 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const users = [
    { id: 1, username: "ashna", password: "password123" },
    { id: 2, username: "zuvy", password: "password456" },
    { id: 3, username: "banku", password: "password789" },
];

app.get("/users",(req,res)=>{
    res.json(users)
})
   
app.post("/users/register",(req,res)=>{
     console.log(req.body)
    const user = req.body
    if(!user.id || !user.username)
    return res.status(400).json({mess: "id or username is not present"})
    users.push(user);
    res.json({messages: "Registration successful"})
})




app.post("/users/update",(req,res)=>{
    console.log(req.body)
    const id = Number(req.body.id)
    const username = req.body.username
    const userIndex = users.findIndex(user => user.id == id)
    
    if(userIndex === -1)
       return res.status(404).json({messages: "User not found"})
    users[userIndex].username = username
    
    res.json(users)
    
})


// app.post("/users/login", (req, res) => {
//     const { username, password } = req.body;
//     const user= users.find(use => use.username === username && use.password === password);

//     if (user) {
//         res.json({ message: "Login successful" });
//     } else {
//         res.status(401).json({ message: "Invalid username or password" });
//     }
// });

app.post('/users/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});


app.listen(PORT,function(){
    console.log(`my port is running port ${PORT}`)
})




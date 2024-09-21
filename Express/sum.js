import express from "express"

const app = express()

app.use(express.urlencoded({extended : true}))

app.get("/",function(request,response){
    //   console.log(request)
      response.send("Hello! this is") 
})

app.post("/sum",function(req,res){
           console.log(req.body);
           let num1 = Number(req.body.num1)
           let num2 = Number(req.body.num2)
           let sum = num1 + num2
           res.send(`Sum is ${sum}`)


})

app.listen(4000, function(){
    console.log("server is running on port 3000")
})



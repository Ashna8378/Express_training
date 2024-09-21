import express from "express"

const router = express.Router()

router.get("/get",function(req, res){
    console.log(req)
    res.send("Hello this")
})


router.post("/sum",function(req,res){

    console.log("form submitted")
    console.log(req.body)

    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let sum = num1 + num2
    res.send(`Sum is ${sum}`)

})




export default router








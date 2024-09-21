import express, { Router }  from "express";

const app = express()
const router = express.Router()
let users = [
    {id:1, username: "ashna123", password: "ashna123"},
    {id:2, username: "ankita123", password: "ankita123"},

    {id:3, username: "banku123", password: "banku123"},
    {id:4, username: "vaibhav123", password: "vaibhav123"},

]


router.post('/login',(req,res)=>{
    const {username, password} = req.body
    const user = users.find(user => user.username === username)
    console.log(username)
    console.log(password)

    if(!user || user.password !== password){
        return res.status(401).json({msg:"username and passwrod is incorrect"})
    }
    req.session.user = user
    return res.status(200).json(user)
})



router.get('/cart',(req,res)=>{

    if(!req.session.user)
        return res.status(401).json({msg: "unauthorized"})
    const cart = req.session.cart
    // console.log(req.session)
    res.status(200).json(cart)
})

router.post("/cart",(req,res)=>{
    const item = req.body
   
    if(!req.session.user)
        return res.status(401).json({msg: "unauthorized"})

    if(!req.session.cart)
        req.session.cart = []

    req.session.cart.push(item)
    res.status(201).json({msg: item})

})


// Wishlist

router.get("/whislist", (req,res)=>{
    const {item,category} = req.body

    if(!req.session.user){
        return res.status(401).json({msg:"unauthorized"})
    }
    
    const whislist = req.session.whislist
    res.status(200).json(whislist)

})

router.post('/whislist', (req,res)=>{

    const {item,category} = req.body

    if(!req.session.user){
        return res.status(401).json({msg: "unauthorized"})
    }

    if(!req.session.whislist){
        req.session.whislist = []

    }

    req.session.whislist.push({item, category})
    res.status(201).json({msg: "Item added to wishlist"})
})

router.get('/liked-posts', (req,res)=>{

    const {postTitle,author} = req.body

    if(!req.session.user){
        return res.status(401).json({msg: "unauthorized"})
    }

    const likedPosts = req.session.likedPosts
    res.status(200).json(likedPosts)
})

router.post('/liked-posts', (req,res)=>{
    const {postTitle,author} = req.body

    if(!req.session.user){
        return res.status(401).json({msg: "Unauthorized"})
    }

    if(!req.session.likedPosts) {
        req.session.likedPosts = []
    }

    req.session.likedPosts.push({postTitle, author})
    res.status(201).json({msg: "liked post added"})
})



export default router


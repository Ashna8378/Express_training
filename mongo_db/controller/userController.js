import User from "../schemas/userSchema.js";
import { hashPassword } from "../utils/passwordHash.js";
import jwt from 'jsonwebtoken';


const SECRET_KEY = "ashna123"

const getUsers = async (req,res) => {
    
    const user = await User.find({})
    res.status(200).json(user)

}

const userRegister = async (req, res)=>{
    let user = req.body

    console.log(user)
    user.password = hashPassword(user.password)
    console.log(user)
    
    user = await User(user)
    console.log(user)
    await user.save()
    res.status(201).json({message: 'Registration Successful'})
}

const userLogin = async(req,res)=>{

    const {username, password} = req.body

    const user = await User.findOne({username: username})
    console.log(user);
    // req.session.user = user

    const tokenData = {
        id: user._id,
        username: user.username
    }
    const token = jwt.sign(tokenData,SECRET_KEY )
    return res.status(200).json({user, token})
}

const getUserStatus = async (req, res) =>{
    const user = req.session.user
    user ? res.status(200).json(user) : res.status(401).json({msg:"user not logged in"})
}


const logoutUser = (req, res) =>{
    req.session.destroy(()=>{

        // console.log("User Logged out")
        res.status(200).json({msg: 'User logged out'})
    })
}


export { getUsers, userRegister, userLogin, getUserStatus,logoutUser }















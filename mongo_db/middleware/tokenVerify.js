import jwt from 'jsonwebtoken'

const SECRET_KEY = "ashna123"



const verifyJwt = (req,res,next) =>{
    const authHeader = req.get("Authorization")
    const token = authHeader.replace('Bearer', '')


    const data = jwt.verify(token,SECRET_KEY )

    req.jwtData = data
    next()
}

export default verifyJwt


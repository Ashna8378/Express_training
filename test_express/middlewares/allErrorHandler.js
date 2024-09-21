const allErrorHandler = (req,res,next)=>{
    res.status(404).json({msg:"Route not found"})
    next()
}

export default allErrorHandler


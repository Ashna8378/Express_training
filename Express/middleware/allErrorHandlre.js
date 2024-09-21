const allErrorHandler = (req, res, next)=>{
    res.status(404).json({messages:"Route not found"})
    next()
}


export default allErrorHandler


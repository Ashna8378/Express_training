const logging = (req,res,next)=>{
    const method = req.method
    const hostname = req.hostname
    const path = req.path
    console.log(`${method} ${hostname} ${path}`)
    next()
}


export default logging

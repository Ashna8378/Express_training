

const logging = (req,res,next)=>{

    console.log(`${req.method} ${req.hostname} ${req.path}`)
    next()
}



export default logging



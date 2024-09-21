const logging = (req, res, next) => {
    const method = req.method;
    const domain = req.hostname;
    const path = req.path;
    console.log(`${method} ${domain}${path}`);
    next();
}



export default logging
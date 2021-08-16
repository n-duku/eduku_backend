

module.exports = (req,res,next)=>{
    //Get authorization header value
    const bearerHeader = req.headers['authorization'];

    //check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ')[1];
        req.token = bearer;
        next();
    }else {
        //Forbidden
        res.status(403).send()
    }
}
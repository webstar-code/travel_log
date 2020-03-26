const jwt = require('jsonwebtoken');


module.exports =  function(req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(400).send("Access deneid");

    try {   
        const verify = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verify;
        // res.json({"Users":req.user});
        console.log(req.user);
        next();
    } catch (error) {
        res.send(error);
    }
}
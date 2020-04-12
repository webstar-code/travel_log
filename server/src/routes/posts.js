const router = require('express').Router();
const verify = require('./verifyjwt');
const User = require('../model/UserModel');

router.get('/posts',verify, async (req,res,next) => {
    const user = await User.findOne({ email: req.user.email });
    res.json({
        user: user
    })
})


module.exports = router;
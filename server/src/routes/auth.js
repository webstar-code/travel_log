const router = require('express').Router();
const User = require('../model/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyjwt');
const { registervalidations, loginvalidation } = require('../validate/validate');


router.get('/register', async (req, res) => {
    // res.json({
    //     message: "registration Route"
    // });
    const user = await User.find();
    res.json({
        user
    })
});

router.post('/register', async (req, res) => {

    // validate the data
    const { error } = registervalidations(req.body);
    if (error) res.status(400).json(error.details[0].message);

    // checking the email duplicate
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).json("Email already Exists");

    // hashing Passwords
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

    // const user =  new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: hashedpassword,
    // });
    const user = new User(req.body);
    try {
        const savedData = await user.save();
        console.log("saved");
    } catch (err) {
        res.status(400).send(err);
    }

    res.json(user);
});


// Logging In
router.post('/login', async (req, res) => {
    // // validate the 
    const { error } = loginvalidation(req.body);
    if (error) res.status(400).json(error.details[0].message);

    // checking if email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("Email doens't Exists");

    // Checking password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).json("Invalid Password");

    console.log(req.body);
    const token = jwt.sign({email: user.email},process.env.TOKEN_SECRET);
    // res.send({user,token});
    res.json({
        token

    }); 
    // res.header('auth-token',token).send(token);
    
    // const head = req.header('auth-token');
    // console.log(head);



});






module.exports = router;
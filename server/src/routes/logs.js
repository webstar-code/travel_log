const express = require('express');
const LogEntry = require('../model/LogEntryModel');
const User = require('../model/UserModel');
const verify = require('./verifyjwt');
const route = express.Router();

route.get('/logs',verify, async (req, res, next) => {

    try {
        // const entries = await LogEntry.findOne({email: req.user.email});
        const entries = await LogEntry.find({email: req.user.email});
        res.json(entries);
        // console.log("entries",req.user);
        const user = await User.find({email: req.user.email});
        


    } catch (error) {
        next(error);
    }

});

route.post('/logs', async (req, res, next) => {
    try {
        const Log = new LogEntry(req.body);
        const createdlog = await Log.save();

        res.json(createdlog);

    } catch (error) {
        if (error.name === 'ValidatorError') {
            res.status(422);
        }
        next(error);
    }
})


module.exports = route;
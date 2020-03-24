const express = require('express');
const LogEntry = require('../model/LogEntryModel');

const route = express.Router();

route.get('/', async (req, res, next) => {

    try {
        const entries = await LogEntry.find();
        res.json(entries);

    } catch (error) {
        next(error);
    }

});

route.post('/', async (req, res, next) => {
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
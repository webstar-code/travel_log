const mongoose = require('mongoose');

const {Schema} = mongoose

const requiredNumber = {
    type: Number,
    required: true,
}

const LogEntrySchema = new Schema({
    title: {
        type: String,
    },
    description: String,
    comments: String,
    rating: Number,
    latitude: Number,            // latitude: {
                                //     ...requiredNumber,
                                //     min: -90,
                                //     max: 90
                                // },
    longitude: Number,          // longitude: {
                                //     ...requiredNumber,
                                //     min: -180,
                                //     max: 180
                                // },
    image: String,
    visitDate: {
        type: Date,                  // required: true,
    },
    email: String
}, {timestamps: true});

const LogEntry = mongoose.model('LogEntry', LogEntrySchema);
module.exports = LogEntry;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    ipadno: {
        type: Number,
        required: true
    },
    roomno: {
        type: String,
        required: true
    }
});

module.exports = Booking = mongoose.model('iPadBooking', BookingSchema);
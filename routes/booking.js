const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Booking = require('../models/Booking');


router.get('/',(req, res) => {
    console.log(res);
    Booking.find(ipadno,roomno)
        .then(bks => res.json(bks))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    

    const newBooking = new Booking(JSON.parse(req.body.body));
    newBooking
        .save()
        .then(sch => res.json(sch))
        .catch(err => console.log(err));

});

module.exports = router;

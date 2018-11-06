const bodyParser = require('body-parser');

const book = require('./routes/booking');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors=require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



// // DB Config
const db = require('./config/keys').mongoURI;
console.log(db);

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.json({ msg: "Welcome" }));

app.use('/booking', book);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

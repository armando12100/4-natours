const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE

mongoose.connect(DB);

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
})

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
    name: 'The Forest Hiker Part Deaux',
    rating: 4.7,
    price: 497
});

testTour.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log('ERROR', err)
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});
const mongoose = require('mongoose')

const emptySchema = new mongoose.Schema({});

const Car = mongoose.model('Car',emptySchema);

module.exports = {
    Car,
}
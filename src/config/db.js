//MongoDB

const mongoose = require("mongoose");

mongoose.set("strict", false);
mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);

mongoose.connect('mongodb://localhost:27017/cars').then(()=>console.log('Conectado a la db'));
const express = require("express");

const carsRouter = express.Router();

carsRouter.get("/",(req,res,next)=>{
    console.log('Hola funciona!');
    res.status(200).json({data:'Hola!'})
});

module.exports = carsRouter;
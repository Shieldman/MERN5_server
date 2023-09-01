const { Car } = require("../models/mongo");

const getAllCars = async (req, res, next) => {
  try {
    const { filter } = req.query;
    const nameFilterOptions = {
      name: { $regex: new RegExp(filter, "i") },
    };
    const cars = await Car.find(filter ? nameFilterOptions : {});
    res.status(200).json({ data: cars });
  } catch (err) {
    res.status(500).json({ data: err.message });
  }
};

const createCar = async (req, res, next) => {
  const newCar = new Car({
    model: req.body.model,
    horsepower: req.body.horsepower,
    year: req.body.year,
    color: req.body.color,
    kilometers: req.body.kilometers,
  });
  await newCar.save();
  res.status(201).json({ data: newCar });
};

const getCarById = async (req, res, next) => {
  try {
    const { id } = req.params;
    //mongo
    const cars = await Car.findById(id);
    res.status(200).json({ data: cars });
  } catch (err) {
    res.status(500).json({ data: err.message });
  }
};

const updateCarById = async (req, res, next) => {
  const { model, horsepower, year, color, kilometers } = req.body;

  try {
    const { id } = req.params;
    const car = await Car.findByIdAndUpdate(
      id,
      { model, horsepower, year, color, kilometers },
      { new: true }
    );
    res.status(200).json({ data: car });
  } catch (err) {
    res.status(500).json({ data: err.message });
  }
};

const deleteCarById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Car.deleteOne({ _id: id });
    res.status(200).json({ data: "OK" });
  } catch (err) {
    res.status(500).json({ data: err.message });
  }
};

module.exports = {
  getAllCars,
  createCar,
  getCarById,
  updateCarById,
  deleteCarById
};

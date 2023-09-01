require("dotenv").config(); //siempre inicialmente
require("./config/db");
const express = require("express");
const cors = require("cors");
const carsRouter = require("./routes/cars");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: true,
  })
);

app.disable("x-powered-by");

app.use("/api/cars", carsRouter);

//Controlador de rutas no encontradas
app.use("*", (req, res, next) => {
  res.status(404).json({ data: "Not found" });
});

//Controlador de errores generales de servidor
app.use((error, req, res, next) => {
  res.status(500).json({ data: "Internal server error" });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `La aplicación está corriendo en la URL: http://localhost:${process.env.SERVER_PORT}`
  );
});

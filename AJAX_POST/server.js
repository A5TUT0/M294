const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON en el cuerpo de la solicitud

app.post("/sum", (req, res) => {
  const numbers = req.body.numbers;
  if (!Array.isArray(numbers)) {
    return res.status(400).send("Invalid input"); // Verifica si la entrada es un array
  }
  const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Suma todos los números en el array
  res.json({ sum: sum }); // Envía la suma como respuesta en formato JSON
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Inicia el servidor en el puerto 3000
});

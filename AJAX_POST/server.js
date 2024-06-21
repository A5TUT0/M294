const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors()); // Permitir CORS desde cualquier origen
app.use(express.json()); // Middleware para parsear JSON en el cuerpo de la solicitud

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.post("/sum", (req, res) => {
  const numbers = req.body.numbers;
  if (!Array.isArray(numbers)) {
    return res.status(400).send("Invalid input"); // Verificar si la entrada es un array
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Sumar todos los números en el array

  // Pausa de 1 segundo antes de enviar la respuesta
  setTimeout(() => {
    res.json({ sum: sum }); // Enviar la suma como respuesta JSON
  }, 1000); // 1000 milisegundos = 1 segundo
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Iniciar el servidor en el puerto 3000
});

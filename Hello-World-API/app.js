const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Serve the frontend files
app.use(express.static(path.join(__dirname, "public")));

// API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hallo Welt" });
});

app.get("/api/MyName", (req, res) => {
  res.json({ message: "Hallo Noah" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

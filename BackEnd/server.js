const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blogleo",
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos establecida");
});

// Crear la tabla 'usuarios' si no existe
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      contraseña VARCHAR(255) NOT NULL
    )
  `;
connection.query(createTableQuery, (err, result) => {
  if (err) {
    console.error("Error al crear la tabla 'usuarios':", err);
    return;
  }
  console.log("Tabla 'usuarios' creada correctamente");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

app.post("/RegisterForm", (req, res) => {
  const { nombre, email, contraseña } = req.body;
  const usuario = { nombre, email, contraseña };

  connection.query("INSERT INTO usuarios SET ?", usuario, (err, result) => {
    if (err) {
      console.error("Error al registrar usuario:", err);
      res.status(500).json({ error: "Error interno del servidor" });
      return;
    }
    console.log("Usuario registrado con éxito");
    res.status(200).json({ message: "Usuario registrado con éxito" });
  });
});

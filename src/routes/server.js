// src/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const contactRoutes = require('./contact');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares esenciales
app.use(cors()); // Habilita CORS para peticiones seguras
app.use(express.json()); // Permite leer cuerpos de peticiones en formato JSON

// Servir archivos estáticos del frontend desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../../public')));

// Rutas de la API
app.use('/api/contact', contactRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});
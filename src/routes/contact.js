// src/routes/contact.js
const express = require('express');
const router = express.Router();

// Endpoint POST para procesar el formulario de contacto
router.post('/', (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validación básica de datos
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                error: 'Todos los campos son obligatorios.' 
            });
        }

        // Simulación de procesamiento exitoso (aquí podrías conectar una base de datos o enviar un email)
        console.log(`Mensaje recibido de ${name} (${email}): ${message}`);

        // Respuesta exitosa al cliente
        return res.status(200).json({ 
            success: true, 
            message: '¡Mensaje recibido con éxito! Nos pondremos en contacto pronto.' 
        });

    } catch (error) {
        console.error('Error en el servidor:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Error interno del servidor. Inténtalo más tarde.' 
        });
    }
});

module.exports = router;    
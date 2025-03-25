const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para archivos estáticos (CSS, imágenes, HTML)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));  // Servir HTML directamente

app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Manejo del formulario
app.post('/submit-form', (req, res) => {
    const { nombre, mensaje } = req.body;

    if (!nombre || !mensaje) {
        return res.status(400).send('<h1>Error: Todos los campos son obligatorios</h1>');
    }

    console.log(`Nombre: ${nombre}`);
    console.log(`Mensaje: ${mensaje}`);

    res.redirect('/confirmacion.html');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});

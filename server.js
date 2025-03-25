const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para servir CSS, imágenes y otros archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// Rutas principales
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/clients', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'clients.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'confirmacion.html'));
});

// Manejo del formulario
app.post('/submit-form', (req, res) => {
    const { nombre, mensaje } = req.body;

    if (!nombre || !mensaje) {
        return res.status(400).send('<h1>Error: Todos los campos son obligatorios</h1>');
    }

    console.log(`Nombre: ${nombre}`);
    console.log(`Mensaje: ${mensaje}`);

    res.redirect('/confirmation');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});

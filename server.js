const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configuración del middleware para servir archivos estáticos (CSS, imágenes)
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

// Manejo del formulario
app.post('/submit-form', (req, res) => {
    const { nombre, mensaje } = req.body;

    // Validación simple del formulario
    if (!nombre || !mensaje) {
        return res.status(400).send('<h1>Error: Todos los campos son obligatorios</h1>');
    }

    console.log(`Nombre: ${nombre}`);
    console.log(`Mensaje: ${mensaje}`);

    // Redirección a la página de confirmación
    res.redirect('/confirmation');
});

app.get('/confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'confirmacion.html'));
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});

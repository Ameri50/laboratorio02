const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, 'public')));

// Servir archivos HTML de "views" cuando se accede a una ruta sin "/views/"
app.get('/:page', (req, res) => {
    const filePath = path.join(__dirname, 'views', `${req.params.page}.html`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
        }
    });
});

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor funcionando en: http://localhost:${PORT}`);
});

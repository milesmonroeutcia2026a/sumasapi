const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        "Title": "API Figuras Geométricas"
    });
});

/* ============================
   ENDPOINT ORIGINAL DE SUMA
============================ */

app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 == null || num2 == null) {
        return res.status(400).json({ error: 'Faltan números para sumar' });
    }

    const resultado = Number(num1) + Number(num2);

    res.json({ resultado });
});

/* ============================
   CUADRADO
============================ */

app.post('/cuadrado/area', (req, res) => {
    const { lado } = req.body;

    if (lado == null) {
        return res.status(400).json({ error: "Falta el lado" });
    }

    const area = Number(lado) * Number(lado);

    res.json({ figura: "Cuadrado", area });
});

app.post('/cuadrado/perimetro', (req, res) => {
    const { lado } = req.body;

    if (lado == null) {
        return res.status(400).json({ error: "Falta el lado" });
    }

    const perimetro = 4 * Number(lado);

    res.json({ figura: "Cuadrado", perimetro });
});

/* ============================
   TRIANGULO
============================ */

app.post('/triangulo/area', (req, res) => {
    const { base, altura } = req.body;

    if (base == null || altura == null) {
        return res.status(400).json({ error: "Faltan base o altura" });
    }

    const area = (Number(base) * Number(altura)) / 2;

    res.json({ figura: "Triángulo", area });
});

app.post('/triangulo/perimetro', (req, res) => {
    const { lado1, lado2, lado3 } = req.body;

    if (lado1 == null || lado2 == null || lado3 == null) {
        return res.status(400).json({ error: "Faltan lados" });
    }

    const perimetro =
        Number(lado1) +
        Number(lado2) +
        Number(lado3);

    res.json({ figura: "Triángulo", perimetro });
});

/* ============================
   CIRCULO
============================ */

app.post('/circulo/area', (req, res) => {
    const { radio } = req.body;

    if (radio == null) {
        return res.status(400).json({ error: "Falta el radio" });
    }

    const area = Math.PI * Math.pow(Number(radio), 2);

    res.json({ figura: "Círculo", area });
});

app.post('/circulo/perimetro', (req, res) => {
    const { radio } = req.body;

    if (radio == null) {
        return res.status(400).json({ error: "Falta el radio" });
    }

    const perimetro = 2 * Math.PI * Number(radio);

    res.json({ figura: "Círculo", perimetro });
});

app.listen(app.get('port'), () => {
    console.log('SERVIDOR EN EL PUERTO', app.get('port'));
});


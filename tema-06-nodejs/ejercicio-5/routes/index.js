var express = require('express');
var router = express.Router();

// ---------------------------------------------------------------
// DATOS DEL SERVIDOR
// Esta lista vive en el servidor (Node). El navegador no la tiene:
// se la mandamos dentro del HTML al renderizar la vista.
// Más adelante vendría de una base de datos.
// ---------------------------------------------------------------
const productos = [
  { nombre: 'Calculadora Casio fx-991', precio: 18, imagen: '/images/calculadora.svg' },
  { nombre: 'Libro Cálculo I (Larson)', precio: 25, imagen: '/images/libro.svg' },
  { nombre: 'Bata de laboratorio', precio: 8, imagen: '/images/bata.svg' },
  { nombre: 'Kit de Arduino', precio: 30, imagen: '/images/arduino.svg' }
];

// Usuario de prueba (en un proyecto real estaría en la base de datos
// y la contraseña guardada cifrada, nunca en texto plano).
const USUARIO = { email: 'admin@ceu.es', password: '1234' };

/* GET /  → página inicial */
router.get('/', function(req, res, next) {
  // res.render('index', {...}) coge views/index.ejs, sustituye las
  // variables (title, productos) y envía el HTML resultante al navegador.
  res.render('index', { title: 'PujaCampus', productos: productos, usuario: null });
});

/* GET /login  → muestra el formulario de login */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Iniciar sesión', error: null });
});

/* POST /login  → recibe los datos del formulario */
router.post('/login', function(req, res, next) {
  // Los datos del formulario llegan en el CUERPO de la petición (tema 2).
  // express.urlencoded() en app.js los convierte en el objeto req.body.
  const email = req.body.email;
  const password = req.body.password;

  if (email === USUARIO.email && password === USUARIO.password) {
    // Login correcto → volvemos a la página inicial saludando al usuario
    res.render('index', { title: 'PujaCampus', productos: productos, usuario: email });
  } else {
    // Login incorrecto → repetimos el formulario con un mensaje de error
    // y el código 401 (no autorizado).
    res.status(401).render('login', { title: 'Iniciar sesión', error: 'Email o contraseña incorrectos' });
  }
});

module.exports = router;

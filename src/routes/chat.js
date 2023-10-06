const express = require('express');
const router = express.Router();

// Vista del chat
router.get('/', (req, res) => {
  res.render('chat');
});

// Enviar mensaje
router.post('/sendMessage', (req, res) => {
  const { message } = req.body;
  // Lógica para enviar el mensaje
  res.send('Mensaje enviado');
});

module.exports = router;

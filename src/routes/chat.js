const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('chat');
});


router.post('/sendMessage', (req, res) => {
  const { message } = req.body;
 
  res.send('Mensaje enviado');
});

module.exports = router;

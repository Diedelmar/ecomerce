const express = require('express');
const router = express.Router();
const Producto = require('../models/producto.js');


router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
} catch (error) {
    console.log('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});


router.post('/', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.log('Error al crear el producto:', error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});

module.exports = router;

const express = require('express');
const { Product } = require('../models');
const router = express.Router();

// Create a new product
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category_id, image_url } = req.body;
    const product = await Product.create({ name, description, price, category_id, image_url });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

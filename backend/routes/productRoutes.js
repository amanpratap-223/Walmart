


// module.exports = router;

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  const updatedProducts = products.map(p => {
    const { _id, ...rest } = p._doc;
    return { id: _id, ...rest };
  });
  res.json(updatedProducts);
});

// GET products by category
router.get('/category/:category', async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  const updatedProducts = products.map(p => {
    const { _id, ...rest } = p._doc;
    return { id: _id, ...rest };
  });
  res.json(updatedProducts);
});

// GET single product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    const { _id, ...rest } = product._doc;
    res.json({ id: _id, ...rest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

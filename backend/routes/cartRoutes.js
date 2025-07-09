// routes/cartRoutes.js

const express  = require('express');
const mongoose = require('mongoose');
const Cart     = require('../models/Cart');
const Product  = require('../models/Product');

const router = express.Router();

// Helper to fetch an existing cart by user or guest
const getCart = async (userId, guestId) => {
  if (userId)  return Cart.findOne({ user: userId });
  if (guestId) return Cart.findOne({ guestId });
  return null;
};

router.post('/', async (req, res) => {
  const { productId, quantity, guestId, userId } = req.body;

  // 1) Validate productId
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: 'Invalid productId' });
  }

  // 2) Parse quantity
  const qty = parseInt(quantity, 10);
  if (isNaN(qty) || qty < 1) {
    return res.status(400).json({ message: 'Invalid quantity' });
  }

  try {
    // 3) Look up the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // 4) Determine which image URL to use
    const imageUrl = Array.isArray(product.images) && product.images.length > 0
      ? product.images[0].url
      : product.image;

    // 5) Fetch (or not) the existing cart
    let cart = await getCart(userId, guestId);

    if (cart) {
      // 6a) Update existing cart
      const idx = cart.products.findIndex(p => p.productId.toString() === productId);
      if (idx > -1) {
        cart.products[idx].quantity += qty;
      } else {
        cart.products.push({
          productId,
          name:     product.name,
          image:    imageUrl,
          price:    product.price,
          quantity: qty,
        });
      }
      cart.totalPrice = cart.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
      await cart.save();
      console.log('🛒 Cart updated:', cart._id);
      return res.status(200).json(cart);

    } else {
      // 6b) Create brand-new cart
      const newCart = await Cart.create({
        user:       userId || undefined,
        guestId:    guestId || `guest_${Date.now()}`,
        products: [{
          productId,
          name:     product.name,
          image:    imageUrl,
          price:    product.price,
          quantity: qty,
        }],
        totalPrice: product.price * qty,
      });
      console.log('🛒 Cart created:', newCart._id);
      return res.status(201).json(newCart);
    }

  } catch (err) {
    console.error('Cart error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

// backend/routes/orderRoutes.js
const express = require('express');
const router  = express.Router();
const Order   = require('../models/Order');

// GET /api/orders — list all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort('-createdAt');
    // map _id → id for frontend
    const out = orders.map(o => ({ id: o._id, userEmail: o.userEmail, totalPrice: o.totalPrice, status: o.status }));
    res.json(out);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/orders/:id — update status
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = status;
    await order.save();
    res.json({ message: 'Updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/orders/:id — remove an order
router.delete('/:id', async (req, res) => {
  try {
    const result = await Order.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Order not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

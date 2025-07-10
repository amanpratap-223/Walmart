// backend/models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userEmail:    { type: String, required: true },
  totalPrice:   { type: Number, required: true },
  status:       { type: String, enum: ['Processing','Shipped','Delivered','Cancelled'], default: 'Processing' },
  createdAt:    { type: Date, default: Date.now },
  // …you can add shippingAddress, orderItems, etc. here…
});

module.exports = mongoose.model('Order', orderSchema);

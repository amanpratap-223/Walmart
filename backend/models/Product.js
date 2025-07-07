// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   category: String,
//   image: String,
// });

// module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  description: String,
  material: String,
  sizes: [String],   // only for clothing
  colors: [String],  // only for clothing
});

module.exports = mongoose.model('Product', productSchema);

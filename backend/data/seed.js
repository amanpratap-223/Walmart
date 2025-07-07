// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Product = require('../models/Product');
// const products = require('./products');

// dotenv.config();

// mongoose.connect(process.env.MONGO_URI)
//   .then(async () => {
//     await Product.deleteMany(); // optional
//     await Product.insertMany(products);
//     console.log("✅ Products seeded successfully");
//     process.exit();
//   })
//   .catch((err) => {
//     console.error("❌ Seeding failed:", err);
//     process.exit(1);
//   });
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const products = require('./products');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Products seeded successfully");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  });

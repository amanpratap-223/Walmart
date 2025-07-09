const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // or './connectDB' if that's your file
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes'); // <-- Add this line





const cartRoutes = require("./routes/cartRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use(cors({ origin: 'http://localhost:5173' }));




app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); // <-- Add this line
app.use('/api/cart', cartRoutes);

// Optional: Basic health check endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

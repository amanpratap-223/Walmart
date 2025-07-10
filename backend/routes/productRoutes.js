
// const express = require('express');
// const router  = express.Router();
// const Product = require('../models/Product');

// // SEARCH across name OR category
// router.get('/search', async (req, res) => {
//   try {
//     const q = (req.query.q || '').trim();
//     if (!q) return res.json([]);

//     // 1️⃣ Exact match on whole name or whole category
//     let prods = await Product.find({
//       $or: [
//         { name:     { $regex: `^${q}$`, $options: 'i' } },
//         { category: { $regex: `^${q}$`, $options: 'i' } },
//       ]
//     });

//     // 2️⃣ Fuzzy fallback if no exact hits
//     if (prods.length === 0) {
//       // turn "t shirt" → ["t","shirt"], escape, then build "t.*shirt"
//       const parts = q
//         .split(/\s+/)
//         .map(w => w.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
//       const fuzzy = parts.join('.*');
//       prods = await Product.find({
//         $or: [
//           { name:     { $regex: fuzzy, $options: 'i' } },
//           { category: { $regex: fuzzy, $options: 'i' } },
//         ]
//       });
//     }

//     // map _id → id
//     const out = prods.map(p => {
//       const { _id, ...rest } = p._doc;
//       return { id: _id, ...rest };
//     });
//     res.json(out);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get all products
// router.get('/', async (req, res) => {
//   const products = await Product.find();
//   const updated  = products.map(p => {
//     const { _id, ...rest } = p._doc;
//     return { id: _id, ...rest };
//   });
//   res.json(updated);
// });

// // Get by category
// router.get('/category/:category', async (req, res) => {
//   const products = await Product.find({ category: req.params.category });
//   const updated  = products.map(p => {
//     const { _id, ...rest } = p._doc;
//     return { id: _id, ...rest };
//   });
//   res.json(updated);
// });

// // Get single product
// router.get('/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     const { _id, ...rest } = product._doc;
//     res.json({ id: _id, ...rest });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router  = express.Router();
const Product = require('../models/Product');

// ─── CREATE ───────────────────────────────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const p = new Product(req.body);
    const saved = await p.save();
    const { _id, ...rest } = saved._doc;
    res.status(201).json({ id: _id, ...rest });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// ─── SEARCH (name OR category, exact then fuzzy) ───────────────────────────────
router.get('/search', async (req, res) => {
  try {
    const q = (req.query.q || '').trim();
    if (!q) return res.json([]);            // ← fixed double `return`

    // exact match on name or category
    let prods = await Product.find({
      $or: [
        { name:     { $regex: `^${q}$`, $options: 'i' } },
        { category: { $regex: `^${q}$`, $options: 'i' } },
      ]
    });

    // fuzzy fallback
    if (prods.length === 0) {
      const parts = q
        .split(/\s+/)
        .map(w => w.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
      const fuzzy = parts.join('.*');
      prods = await Product.find({
        $or: [
          { name:     { $regex: fuzzy, $options: 'i' } },
          { category: { $regex: fuzzy, $options: 'i' } },
        ]
      });
    }

    const out = prods.map(p => {
      const { _id, ...rest } = p._doc;
      return { id: _id, ...rest };
    });
    res.json(out);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ─── LIST ALL ─────────────────────────────────────────────────────────────────
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products.map(p => {
    const { _id, ...rest } = p._doc;
    return { id: _id, ...rest };
  }));
});

// ─── LIST BY CATEGORY ─────────────────────────────────────────────────────────
router.get('/category/:category', async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products.map(p => {
    const { _id, ...rest } = p._doc;
    return { id: _id, ...rest };
  }));
});

// ─── GET SINGLE ───────────────────────────────────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ message: 'Product not found' });
    const { _id, ...rest } = p._doc;
    res.json({ id: _id, ...rest });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ─── UPDATE ───────────────────────────────────────────────────────────────────
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Product not found' });
    const { _id, ...rest } = updated._doc;
    res.json({ id: _id, ...rest });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// ─── DELETE ───────────────────────────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

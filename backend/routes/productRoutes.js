
// // const express = require('express');
// // const router  = express.Router();
// // const Product = require('../models/Product');

// // // SEARCH across name OR category
// // router.get('/search', async (req, res) => {
// //   try {
// //     const q = (req.query.q || '').trim();
// //     if (!q) return res.json([]);

// //     // 1️⃣ Exact match on whole name or whole category
// //     let prods = await Product.find({
// //       $or: [
// //         { name:     { $regex: `^${q}$`, $options: 'i' } },
// //         { category: { $regex: `^${q}$`, $options: 'i' } },
// //       ]
// //     });

// //     // 2️⃣ Fuzzy fallback if no exact hits
// //     if (prods.length === 0) {
// //       // turn "t shirt" → ["t","shirt"], escape, then build "t.*shirt"
// //       const parts = q
// //         .split(/\s+/)
// //         .map(w => w.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
// //       const fuzzy = parts.join('.*');
// //       prods = await Product.find({
// //         $or: [
// //           { name:     { $regex: fuzzy, $options: 'i' } },
// //           { category: { $regex: fuzzy, $options: 'i' } },
// //         ]
// //       });
// //     }

// //     // map _id → id
// //     const out = prods.map(p => {
// //       const { _id, ...rest } = p._doc;
// //       return { id: _id, ...rest };
// //     });
// //     res.json(out);

// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // Get all products
// // router.get('/', async (req, res) => {
// //   const products = await Product.find();
// //   const updated  = products.map(p => {
// //     const { _id, ...rest } = p._doc;
// //     return { id: _id, ...rest };
// //   });
// //   res.json(updated);
// // });

// // // Get by category
// // router.get('/category/:category', async (req, res) => {
// //   const products = await Product.find({ category: req.params.category });
// //   const updated  = products.map(p => {
// //     const { _id, ...rest } = p._doc;
// //     return { id: _id, ...rest };
// //   });
// //   res.json(updated);
// // });

// // // Get single product
// // router.get('/:id', async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);
// //     if (!product) return res.status(404).json({ message: "Product not found" });
// //     const { _id, ...rest } = product._doc;
// //     res.json({ id: _id, ...rest });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // module.exports = router;

// const express = require('express');
// const router  = express.Router();
// const Product = require('../models/Product');

// // ─── CREATE ───────────────────────────────────────────────────────────────────
// router.post('/', async (req, res) => {
//   try {
//     const p = new Product(req.body);
//     const saved = await p.save();
//     const { _id, ...rest } = saved._doc;
//     res.status(201).json({ id: _id, ...rest });
//   } catch (err) {
//     console.error(err);
//     res.status(400).json({ error: err.message });
//   }
// });

// // ─── SEARCH (name OR category, exact then fuzzy) ───────────────────────────────
// router.get('/search', async (req, res) => {
//   try {
//     const q = (req.query.q || '').trim();
//     if (!q) return res.json([]);            // ← fixed double `return`

//     // exact match on name or category
//     let prods = await Product.find({
//       $or: [
//         { name:     { $regex: `^${q}$`, $options: 'i' } },
//         { category: { $regex: `^${q}$`, $options: 'i' } },
//       ]
//     });

//     // fuzzy fallback
//     if (prods.length === 0) {
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

// // ─── LIST ALL ─────────────────────────────────────────────────────────────────
// router.get('/', async (req, res) => {
//   const products = await Product.find();
//   res.json(products.map(p => {
//     const { _id, ...rest } = p._doc;
//     return { id: _id, ...rest };
//   }));
// });

// // ─── LIST BY CATEGORY ─────────────────────────────────────────────────────────
// router.get('/category/:category', async (req, res) => {
//   const products = await Product.find({ category: req.params.category });
//   res.json(products.map(p => {
//     const { _id, ...rest } = p._doc;
//     return { id: _id, ...rest };
//   }));
// });

// // ─── GET SINGLE ───────────────────────────────────────────────────────────────
// router.get('/:id', async (req, res) => {
//   try {
//     const p = await Product.findById(req.params.id);
//     if (!p) return res.status(404).json({ message: 'Product not found' });
//     const { _id, ...rest } = p._doc;
//     res.json({ id: _id, ...rest });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // List all product names for the AI recommender
// router.get('/titles', async (req, res) => {
//   try {
//     const products = await Product.find({}, 'name');
//     const titles = products.map(p => p.name);
//     res.json({ titles });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ─── UPDATE ───────────────────────────────────────────────────────────────────
// router.put('/:id', async (req, res) => {
//   try {
//     const updated = await Product.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true, runValidators: true }
//     );
//     if (!updated) return res.status(404).json({ message: 'Product not found' });
//     const { _id, ...rest } = updated._doc;
//     res.json({ id: _id, ...rest });
//   } catch (err) {
//     console.error(err);
//     res.status(400).json({ error: err.message });
//   }
// });

// // ─── DELETE ───────────────────────────────────────────────────────────────────
// router.delete('/:id', async (req, res) => {
//   try {
//     const deleted = await Product.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ message: 'Product not found' });
//     res.json({ message: 'Product deleted' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });




// module.exports = router;

// backend/routes/productRoutes.js
// const express = require('express');
// const router  = express.Router();
// const Product = require('../models/Product');

// // ─── 1) TITLES FIRST ───────────────────────────────────────────────────────────
// //   This must come before any '/:id' route, otherwise "titles" will be
// //   interpreted as an ObjectId.
// router.get('/titles', async (req, res) => {
//   try {
//     // find all products, but only project the "name" field
//     const products = await Product.find({}, 'name');
//     // pull out the array of names
//     const titles = products.map(p => p.name);
//     res.json({ titles });
//   } catch (err) {
//     console.error('Error in /titles:', err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ─── 2) GET BY ID ───────────────────────────────────────────────────────────────
// router.get('/:id', async (req, res) => {
//   try {
//     const p = await Product.findById(req.params.id);
//     if (!p) return res.status(404).json({ message: 'Product not found' });
//     const { _id, ...rest } = p._doc;
//     res.json({ id: _id, ...rest });
//   } catch (err) {
//     console.error('Error in GET /:id', err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ─── 3) CATEGORY LIST ──────────────────────────────────────────────────────────
// router.get('/category/:category', async (req, res) => {
//   const products = await Product.find({ category: req.params.category });
//   res.json(products.map(p => {
//     const { _id, ...rest } = p._doc;
//     return { id: _id, ...rest };
//   }));
// });

// // ─── 4) SEARCH ─────────────────────────────────────────────────────────────────
// router.get('/search', async (req, res) => {
//   try {
//     const q = (req.query.q || '').trim();
//     if (!q) return res.json([]);

//     // exact on name or category
//     let prods = await Product.find({
//       $or: [
//         { name:     { $regex: `^${q}$`, $options: 'i' } },
//         { category: { $regex: `^${q}$`, $options: 'i' } },
//       ]
//     });

//     // fuzzy fallback
//     if (prods.length === 0) {
//       const parts = q.split(/\s+/).map(w => w.replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&'));
//       const fuzzy = parts.join('.*');
//       prods = await Product.find({
//         $or: [
//           { name:     { $regex: fuzzy, $options: 'i' } },
//           { category: { $regex: fuzzy, $options: 'i' } },
//         ]
//       });
//     }

//     res.json(prods.map(p => {
//       const { _id, ...rest } = p._doc;
//       return { id: _id, ...rest };
//     }));
//   } catch (err) {
//     console.error('Error in /search', err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ─── 5) LIST ALL ───────────────────────────────────────────────────────────────
// router.get('/', async (req, res) => {
//   const products = await Product.find();
//   res.json(products.map(p => {
//     const { _id, ...rest } = p._doc;
//     return { id: _id, ...rest };
//   }));
// });

// // ─── 6) CREATE, UPDATE, DELETE (if you need them) ──────────────────────────────
// // you can leave these or remove them if you don’t use them.

// router.post('/', async (req, res) => {
//   try {
//     const saved = await new Product(req.body).save();
//     const { _id, ...rest } = saved._doc;
//     res.status(201).json({ id: _id, ...rest });
//   } catch (err) {
//     console.error('POST / error', err);
//     res.status(400).json({ error: err.message });
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const updated = await Product.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true, runValidators: true }
//     );
//     if (!updated) return res.status(404).json({ message: 'Product not found' });
//     const { _id, ...rest } = updated._doc;
//     res.json({ id: _id, ...rest });
//   } catch (err) {
//     console.error('PUT /:id', err);
//     res.status(400).json({ error: err.message });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const deleted = await Product.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ message: 'Product not found' });
//     res.json({ message: 'Product deleted' });
//   } catch (err) {
//     console.error('DELETE /:id', err);
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

// backend/routes/productRoutes.js
const express = require('express')
const router  = express.Router()
const Product = require('../models/Product')

// ─── 1) TITLES ────────────────────────────────────────────────────────────────
// GET /api/products/titles
router.get('/titles', async (req, res) => {
  try {
    // only pull the `name` field from every Product
    const products = await Product.find({}, 'name')
    const titles   = products.map(p => p.name)
    res.json({ titles })
  } catch (err) {
    console.error('Error in GET /titles', err)
    res.status(500).json({ error: err.message })
  }
})

// ─── 2) SEARCH ────────────────────────────────────────────────────────────────
// GET /api/products/search?q=foo
router.get('/search', async (req, res) => {
  try {
    const q = (req.query.q||'').trim()
    if (!q) return res.json([])

    // exact match on name OR category
    let prods = await Product.find({
      $or: [
        { name:     { $regex: `^${q}$`, $options: 'i' } },
        { category: { $regex: `^${q}$`, $options: 'i' } },
      ]
    })

    // fallback to fuzzy
    if (prods.length===0) {
      const parts = q.split(/\s+/).map(w => w.replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&'))
      const fuzzy = parts.join('.*')
      prods = await Product.find({
        $or: [
          { name:     { $regex: fuzzy, $options: 'i' } },
          { category: { $regex: fuzzy, $options: 'i' } },
        ]
      })
    }

    // map _id → id
    const out = prods.map(p => {
      const { _id, ...rest } = p._doc
      return { id: _id, ...rest }
    })
    res.json(out)

  } catch (err) {
    console.error('Error in GET /search', err)
    res.status(500).json({ error: err.message })
  }
})

// ─── 3) LIST BY CATEGORY ─────────────────────────────────────────────────────
// GET /api/products/category/:category
router.get('/category/:category', async (req, res) => {
  const prods = await Product.find({ category: req.params.category })
  const out   = prods.map(p => {
    const { _id, ...rest } = p._doc
    return { id: _id, ...rest }
  })
  res.json(out)
})

// ─── 4) GET SINGLE ───────────────────────────────────────────────────────────
// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const p = await Product.findById(req.params.id)
    if (!p) return res.status(404).json({ message: 'Not found' })
    const { _id, ...rest } = p._doc
    res.json({ id: _id, ...rest })
  } catch (err) {
    console.error('Error in GET /:id', err)
    res.status(500).json({ error: err.message })
  }
})

// ─── 5) LIST ALL ─────────────────────────────────────────────────────────────
// GET /api/products
router.get('/', async (req, res) => {
  const prods = await Product.find()
  const out   = prods.map(p => {
    const { _id, ...rest } = p._doc
    return { id: _id, ...rest }
  })
  res.json(out)
})

// ─── 6) CREATE ───────────────────────────────────────────────────────────────
// POST /api/products
router.post('/', async (req, res) => {
  try {
    const saved = await new Product(req.body).save()
    const { _id, ...rest } = saved._doc
    res.status(201).json({ id: _id, ...rest })
  } catch (err) {
    console.error('Error in POST /', err)
    res.status(400).json({ error: err.message })
  }
})

// ─── 7) UPDATE ───────────────────────────────────────────────────────────────
// PUT /api/products/:id
router.put('/:id', async (req, res) => {
  try {
    const upd = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    )
    if (!upd) return res.status(404).json({ message: 'Not found' })
    const { _id, ...rest } = upd._doc
    res.json({ id: _id, ...rest })
  } catch (err) {
    console.error('Error in PUT /:id', err)
    res.status(400).json({ error: err.message })
  }
})

// ─── 8) DELETE ───────────────────────────────────────────────────────────────
// DELETE /api/products/:id
router.delete('/:id', async (req, res) => {
  try {
    const del = await Product.findByIdAndDelete(req.params.id)
    if (!del) return res.status(404).json({ message: 'Not found' })
    res.json({ message: 'Deleted' })
  } catch (err) {
    console.error('Error in DELETE /:id', err)
    res.status(500).json({ error: err.message })
  }
})

module.exports = router

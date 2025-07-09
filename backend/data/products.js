// src/data/products.js
 const products = [
  // ─── MEN (10 items) ──────────────────────────────────────────────────────────
  {
    id: 'men-shirt',
    name: "Men's Shirt",
    price: 799,
    category: "men",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    description: "Classic cotton shirt.",
    sizes: ['S','M','L','XL'],
    colors: ['White','Blue','Black']
  },
  {
    id: 'men-jeans',
    name: "Men's Jeans",
    price: 1299,
    category: "men",
    image: "https://images.unsplash.com/photo-1526178613658-3e9153c43c8b",
    description: "Slim-fit denim jeans.",
    sizes: ['30','32','34','36'],
    colors: ['Blue','Black']
  },
  { id: 'men-tshirt',      name: "Men's T-Shirt",      price: 499,  category: "men", image: "https://m.media-amazon.com/images/I/91qkoZWNDRL._AC_UL480_FMwebp_QL65_.jpg", description:"Soft cotton T-shirt.", sizes:['S','M','L'], colors:['Grey','Red'] },
  { id: 'men-sneakers',    name: "Men's Sneakers",    price: 1999, category: "men", image: "https://m.media-amazon.com/images/I/61rSOKoLhyL._SY695_.jpg", description:"Comfort running shoes." },
  { id: 'men-jacket',      name: "Men's Jacket",      price: 2499, category: "men", image: "https://m.media-amazon.com/images/I/71b5QeT4qqL._AC_UL480_FMwebp_QL65_.jpg", description:"Water-resistant jacket." },
  { id: 'men-watch',       name: "Men's Watch",       price: 1799, category: "men", image: "https://m.media-amazon.com/images/I/71cvUQTUXpL._AC_UL480_FMwebp_QL65_.jpg", description:"Stainless steel watch." },
  { id: 'men-wallet',      name: "Men's Wallet",      price: 599,  category: "men", image: "https://m.media-amazon.com/images/I/81qeoeySGML._AC_UL480_FMwebp_QL65_.jpg", description:"Leather bifold wallet." },
  { id: 'men-belt',        name: "Men's Belt",        price: 399,  category: "men", image: "https://m.media-amazon.com/images/I/61zM2-C+QZL._AC_UL480_FMwebp_QL65_.jpg", description:"Genuine leather belt." },
  { id: 'men-shades',      name: "Men's Sunglasses",  price: 899,  category: "men", image: "https://m.media-amazon.com/images/I/51Lh+f1WNzS._AC_UL480_FMwebp_QL65_.jpg", description:"UV-protected sunglasses." },
  { id: 'men-suit',        name: "Men's Suit",        price: 4599, category: "men", image: "https://m.media-amazon.com/images/I/61mVFKYYiCL._AC_UL480_FMwebp_QL65_.jpg", description:"Two-piece tailored suit." },

  // ─── WOMEN (10 items) ────────────────────────────────────────────────────────
  { id: 'women-kurti',     name: "Women's Kurti",     price: 899,  category: "women", image: "https://m.media-amazon.com/images/I/61TvGR+EtAL._AC_UL480_FMwebp_QL65_.jpg", description:"Embroidered cotton kurti.", sizes:['S','M','L'], colors:['Pink','Yellow'] },
  { id: 'women-dress',     name: "Women's Dress",     price: 1499, category: "women", image: "https://m.media-amazon.com/images/I/71+HFhl3nSL._AC_UL480_FMwebp_QL65_.jpg", description:"Flowy midi dress.", sizes:['XS','S','M'], colors:['Navy','Green'] },
  { id: 'women-saree',     name: "Women's Saree",     price: 2499, category: "women", image: "https://m.media-amazon.com/images/I/61nK2fhO9oL._AC_UL480_FMwebp_QL65_.jpg", description:"Silk saree.", colors:['Red','Blue'] },
  { id: 'women-jeans',     name: "Women's Jeans",     price: 1399, category: "women", image: "https://m.media-amazon.com/images/I/6170CvI0lhL._AC_UL480_FMwebp_QL65_.jpg", description:"High-waist jeans." },
  { id: 'women-top',       name: "Women's Top",       price: 699,  category: "women", image: "https://m.media-amazon.com/images/I/61aeTfB9hUL._AC_UL480_FMwebp_QL65_.jpg", description:"Chiffon blouse.", sizes:['S','M','L'], colors:['White','Black'] },
  { id: 'women-sandals',   name: "Women's Sandals",   price: 999,  category: "women", image: "https://m.media-amazon.com/images/I/51ug0IWayqL._AC_UL480_FMwebp_QL65_.jpg", description:"Leather sandals." },
  { id: 'women-handbag',   name: "Women's Handbag",   price: 1799, category: "women", image: "https://m.media-amazon.com/images/I/8133aGafA6L._AC_UL480_FMwebp_QL65_.jpg", description:"Canvas tote bag." },
  { id: 'women-earrings',  name: "Women's Earrings",  price: 599,  category: "women", image: "https://m.media-amazon.com/images/I/41A2YslsQHL._AC_UL480_FMwebp_QL65_.jpg", description:"Gold-plated hoops." },
  { id: 'women-watch',     name: "Women's Watch",     price: 1599, category: "women", image: "https://m.media-amazon.com/images/I/61EAcTdXZ7L._AC_UL480_FMwebp_QL65_.jpg", description:"Minimalist watch." },
  { id: 'women-shades',    name: "Women's Sunglasses",price: 799,  category: "women", image: "https://m.media-amazon.com/images/I/41jtH4EZ78L._AC_UL480_FMwebp_QL65_.jpg", description:"Fashion sunglasses." },

  // ─── ELECTRONICS (10 items) ─────────────────────────────────────────────────
  { id: 'phone',           name: "Phone",            price:12999, category:"electronics", image:"https://m.media-amazon.com/images/I/61FMZ9rSZUL._AC_UY327_FMwebp_QL65_.jpg", description:"Latest 5G smartphone." },
  { id: 'laptop',          name: "Laptop",           price:35999, category:"electronics", image:"https://m.media-amazon.com/images/I/719OMbh40jL._AC_UY327_FMwebp_QL65_.jpg", description:"Lightweight laptop." },
  { id: 'smartwatch',      name: "Smartwatch",       price: 4999, category:"electronics", image:"https://m.media-amazon.com/images/I/611jnYHa1OL._AC_UY327_FMwebp_QL65_.jpg", description:"Fitness tracker watch." },
  { id: 'earphones',       name: "Bluetooth Earphones",price:2499,category:"electronics",image:"https://m.media-amazon.com/images/I/51oMWaW7tKL._AC_UY327_FMwebp_QL65_.jpg",description:"Noise-cancelling buds."},
  { id: 'tablet',          name: "Tablet",           price:17999, category:"electronics", image:"https://m.media-amazon.com/images/I/51oj5gE7P+L._AC_UY327_FMwebp_QL65_.jpg", description:"10” display tablet." },
  { id: 'monitor',         name: "Monitor",          price: 7999, category:"electronics", image:"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/af509e49-f69b-4b39-b296-c9a9629bd28a._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg", description:"24” HD monitor." },
  { id: 'mouse',           name: "Wireless Mouse",   price:  899, category:"electronics", image:"https://m.media-amazon.com/images/I/61XXSNfyC6L._AC_UY327_FMwebp_QL65_.jpg", description:"Ergonomic mouse." },
  { id: 'keyboard',        name: "Keyboard",         price: 1199, category:"electronics", image:"https://m.media-amazon.com/images/I/61bFfzSUVSL._AC_UY327_FMwebp_QL65_.jpg", description:"Mechanical keyboard."},
  { id: 'speaker',         name: "Speaker",          price: 2999, category:"electronics", image:"https://m.media-amazon.com/images/I/81VttNsrDwL._AC_UY327_FMwebp_QL65_.jpg", description:"Bluetooth speaker." },
  { id: 'powerbank',       name: "Power Bank",       price: 1499, category:"electronics", image:"https://m.media-amazon.com/images/I/61H84kDDNFL._AC_UY327_FMwebp_QL65_.jpg",description:"10,000 mAh power bank."},

  // ─── FURNITURE (10 items) ────────────────────────────────────────────────────
  { id: 'dining-table',    name:"Dining Table",      price:15500, category:"furniture", image:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4",description:"Wooden dining table." },
  { id: 'chair',           name:"Chair",             price: 2500, category:"furniture", image:"https://m.media-amazon.com/images/I/71NcYeF15mL._AC_UL480_FMwebp_QL65_.jpg",description:"Ergonomic chair." },
  { id: 'sofa',            name:"Sofa",              price:22500, category:"furniture", image:"https://m.media-amazon.com/images/I/71ht1jReY0L._AC_UL480_FMwebp_QL65_.jpg",description:"3-seater sofa." },
  { id: 'bed',             name:"Bed",               price:19500, category:"furniture", image:"https://images.unsplash.com/photo-1464983953574-0892a716854b",description:"Queen bed frame." },
  { id: 'bookshelf',       name:"Bookshelf",         price: 3500, category:"furniture", image:"https://m.media-amazon.com/images/I/611GrKNj8DL._AC_UL480_FMwebp_QL65_.jpg",description:"5-tier bookshelf." },
  { id: 'wardrobe',        name:"Wardrobe",          price:10500, category:"furniture", image:"https://m.media-amazon.com/images/I/61yZ7G1H7bL._AC_UL480_FMwebp_QL65_.jpg",description:"2-door wardrobe." },
  { id: 'study-desk',      name:"Study Desk",        price: 4500, category:"furniture", image:"https://m.media-amazon.com/images/I/6190mFd9jkL._AC_UL480_FMwebp_QL65_.jpg",description:"Study desk." },
  { id: 'coffee-table',    name:"Coffee Table",      price: 4000, category:"furniture", image:"https://m.media-amazon.com/images/I/81RhbMxRqCL._AC_UL480_FMwebp_QL65_.jpg",description:"Glass top coffee table." },
  { id: 'tv-unit',         name:"TV Unit",           price: 8500, category:"furniture", image:"https://m.media-amazon.com/images/I/71srFpLjOIL._AC_UL480_FMwebp_QL65_.jpg",description:"Entertainment unit." },
  { id: 'recliner',        name:"Recliner",          price:18500, category:"furniture", image:"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/dd99138a-3e42-47bc-a0f1-d587f34e35cb._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg",description:"Leather recliner." },

  // ─── GROCERY (10 items) ──────────────────────────────────────────────────────
  { id:'cream',    name:"Cream",    price: 250, category:"grocery", image:"https://m.media-amazon.com/images/I/51246OdUzZL._AC_UL480_FMwebp_QL65_.jpg",description:"Whipping cream." },
  { id:'milk',     name:"Milk",     price:  60, category:"grocery", image:"https://m.media-amazon.com/images/I/61F9k86JSHL._AC_UL480_FMwebp_QL65_.jpg",description:"Full-cream milk." },
  { id:'eggs',     name:"Eggs",     price:  80, category:"grocery", image:"https://m.media-amazon.com/images/I/61bdBjlM2xL._AC_UL480_FMwebp_QL65_.jpg",description:"Free-range eggs." },
  { id:'rice',     name:"Rice",     price: 120, category:"grocery", image:"https://m.media-amazon.com/images/I/61luvSZNl6L._AC_UL480_FMwebp_QL65_.jpg",description:"Basmati rice." },
  { id:'flour',    name:"Wheat Flour",price:180, category:"grocery", image:"https://m.media-amazon.com/images/I/61ziVn4FAHL._AC_UL480_FMwebp_QL65_.jpg",description:"Whole wheat flour." },
  { id:'paneer',   name:"Paneer",   price: 350, category:"grocery", image:"https://m.media-amazon.com/images/I/51bwb3zSy7L._AC_UL480_FMwebp_QL65_.jpg",description:"Fresh paneer." },
  { id:'butter',   name:"Butter",   price: 200, category:"grocery", image:"https://m.media-amazon.com/images/I/51KrxEKN58L._AC_UL480_FMwebp_QL65_.jpg",description:"Salted butter." },
  { id:'bread',    name:"Bread",    price:  40, category:"grocery", image:"https://m.media-amazon.com/images/I/71oT+bEpxUL._AC_UL480_FMwebp_QL65_.jpg",description:"Whole wheat bread." },
  { id:'apples',   name:"Apples",   price: 100, category:"grocery", image:"https://m.media-amazon.com/images/I/51mexNZ7daL._AC_UL480_FMwebp_QL65_.jpg",description:"Fresh apples." },
  { id:'bananas',  name:"Bananas",  price:  40, category:"grocery", image:"https://m.media-amazon.com/images/I/51ugYaVEVQL._AC_UL480_FMwebp_QL65_.jpg",description:"Ripe bananas." },

  // ─── TRENDING (10 items) ─────────────────────────────────────────────────────
  { id:'airpods',      name:"AirPods Pro",           price:24900,category:"trending", image:"https://m.media-amazon.com/images/I/51ax7VPA30L._AC_UY327_FMwebp_QL65_.jpg", description:"Wireless earbuds." },
  { id:'bluetooth-sp',  name:"Bluetooth Speaker",     price: 2999,category:"trending", image:"https://m.media-amazon.com/images/I/81ocVi-mglL._AC_UY327_FMwebp_QL65_.jpg", description:"Portable speaker." },
  { id:'drone',        name:"Drone",                 price:49999,category:"trending", image:"https://m.media-amazon.com/images/I/51d8xVMnbyL._AC_UL480_FMwebp_QL65_.jpg", description:"Quadcopter drone." },
  { id:'fit-tracker',  name:"Fitness Tracker",       price: 5999,category:"trending", image:"https://m.media-amazon.com/images/I/71sGEWFWkxL._AC_UY327_FMwebp_QL65_.jpg", description:"Health band." },
  { id:'smart-hub',    name:"Smart Home Hub",        price:12999,category:"trending", image:"https://m.media-amazon.com/images/I/31NfP8KLO1L._AC_UL480_FMwebp_QL65_.jpg", description:"Voice-assistant hub." },
  { id:'vr-headset',   name:"VR Headset",            price:39999,category:"trending", image:"https://m.media-amazon.com/images/I/61-tgcn-R3L._AC_UY327_FMwebp_QL65_.jpg", description:"Immersive VR kit." },
  { id:'e-scooter',    name:"E-Scooter",             price:24999,category:"trending", image:"https://m.media-amazon.com/images/I/61I48W9EZYL._AC_UL480_FMwebp_QL65_.jpg", description:"Electric scooter." },
  { id:'projector',    name:"Portable Projector",    price:15999,category:"trending", image:"https://m.media-amazon.com/images/I/71BoB+5wXXL._AC_UY327_FMwebp_QL65_.jpg", description:"Mini HD projector." },
  { id:'console',      name:"Gaming Console",        price:29999,category:"trending", image:"https://m.media-amazon.com/images/I/71KoRdQ6I6L._AC_UL480_FMwebp_QL65_.jpg", description:"Latest gen console." },
  { id:'3dprinter',    name:"3D Printer",            price:45999,category:"trending", image:"https://m.media-amazon.com/images/I/31mJhCGlhcL._AC_UL480_FMwebp_QL65_.jpg", description:"Desktop 3D printer." },

  // ─── ONLY_AT_WALMART (10 items) ───────────────────────────────────────────────
  { id:'air-fryer',    name:"Walmart Air Fryer",     price:5499,  category:"only-at-walmart", image:"https://m.media-amazon.com/images/I/81UnVRZkvbL._AC_UY327_FMwebp_QL65_.jpg",description:"Healthy fry basket." },
  { id:'led-strip',    name:"Smart LED Strip",       price:1599,  category:"only-at-walmart", image:"https://m.media-amazon.com/images/I/81NXYxaqhIL._AC_UL480_FMwebp_QL65_.jpg",description:"Voice-control lights."},
  { id:'coffee-maker', name:"Exclusive CoffeeMaker", price:3999,  category:"only-at-walmart", image:"https://m.media-amazon.com/images/I/51CG7fT4ShL._AC_UY327_FMwebp_QL65_.jpg",description:"Limited edition brewer."},
  { id:'smart-vac',    name:"Smart Vacuum",          price:7999,  category:"only-at-walmart", image:"https://m.media-amazon.com/images/I/81vlPkYc5QL._AC_UY327_FMwebp_QL65_.jpg",description:"Robot vacuum cleaner."},
  { id:'juicer',       name:"Juicer Mixer",          price:2499,  category:"only-at-walmart", image:"https://m.media-amazon.com/images/I/71EqgKLhTtL._AC_UY327_FMwebp_QL65_.jpg",description:"Multi-function juicer."},
  { id:'picnic-set',   name:"Picnic Basket Set",     price:1799,  category:"only-at-walmart", image:"https://m.media-amazon.com/images/I/813lmKi4fcL._AC_UY327_FMwebp_QL65_.jpg",description:"Family picnic kit."},
  { id:'blanket',      name:"Limited Blanket",       price: 999,  category:"only-at-walmart", image:"https://m.media-amazon.com/images/I/61FLiIDBnsL._AC_UL480_FMwebp_QL65_.jpg",description:"Cozy fleece blanket."},
  { id:'toy-bundle',   name:"Kids' Toy Bundle",      price:1299,  category:"only-at-walmart", image:"https://m.media-amazon.com/images/I/71fb9DnRwQS._AC_UL480_FMwebp_QL65_.jpg",description:"Educational toys."},
  { id:'fitness-kit',  name:"Walmart Fitness Kit",   price:2999,  category:"only-at-walmart", image:"https://m.media-amazon.com/images/I/81XNzjmXi+L._AC_UL480_FMwebp_QL65_.jpg",description:"Home workout gear."},
  { id:'diffuser',     name:"Oil Diffuser",          price:1399,  category:"only-at-walmart", image:"https://m.media-amazon.com/images/I/614SO+Al+nL._AC_UL480_FMwebp_QL65_.jpg",description:"Aromatherapy diffuser."},
];


module.exports = products;

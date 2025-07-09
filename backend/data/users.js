module.exports = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123", // Will be hashed by the User model
    role: "admin"
  },
  {
    name: "Customer User",
    email: "customer@example.com",
    password: "customer123",
    role: "customer"
  }
];

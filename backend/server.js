const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const Product = require("./models/Product");
const seedProducts = require("./data/seedProducts");

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;

// Seed database if empty, then start server
const startServer = async () => {
  await connectDB();

  const count = await Product.countDocuments();
  const hasMissingImages = await Product.exists({
    $or: [
      { image: { $exists: false } },
      { image: "" },
      { image: null },
    ],
  });

  if (count === 0) {
    await Product.insertMany(seedProducts);
    console.log("Sample products seeded");
  } else if (hasMissingImages) {
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
    console.log("Products reseeded with images");
  } else {
    for (const seed of seedProducts) {
      await Product.findOneAndUpdate({ name: seed.name }, { $set: seed });
    }
    console.log("Product images synced");
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

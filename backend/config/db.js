const mongoose = require("mongoose");

// Connect to MongoDB with retries (helps when Docker starts all services at once)
const connectDB = async (retries = 5) => {
  const uri =
    process.env.MONGODB_URI || "mongodb://localhost:27017/ecommerce";

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await mongoose.connect(uri);
      console.log("MongoDB connected");
      return;
    } catch (error) {
      console.log(`MongoDB retry ${attempt}/${retries}...`);
      if (attempt === retries) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
};

module.exports = connectDB;

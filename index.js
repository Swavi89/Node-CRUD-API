import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";
import productRoutes from "./routes/product.route.js";

// Load environment variables
dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node API Swavi");
});


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Connection failed:", error.message);
  });

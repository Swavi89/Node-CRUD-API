import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRoutes from "./routes/product.route.js";

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
  .connect(
    "mongodb+srv://admin:RX4KYdCaN4o54jjm@backenddb.papqtvv.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

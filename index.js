import express from 'express'
import mongoose from 'mongoose';

const app = express()



app.get("/", (req, res) => {
    res.send("Hello from node API Swavi");
});


mongoose.connect("mongodb+srv://admin:RX4KYdCaN4o54jjm@backenddb.papqtvv.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(() => {
    console.log("Connection failed");
});




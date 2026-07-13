const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const contactRoutes=require("./routes/contactRoutes");
connectDB()

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/contact",contactRoutes);
// Home Route
app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
require("dotenv").config();
const express = require("express");
const cors = require("cors");


const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

    console.log("Server running on port 5000");
});
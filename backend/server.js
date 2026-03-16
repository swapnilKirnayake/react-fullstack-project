const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

app.listen(5000, () => {

    console.log("Server running on port 5000");
});
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    res.send("Backend API running ...")

});

app.use("/", userRoutes);

app.listen(5000, () => {

    console.log("Server running on port 5000");
});
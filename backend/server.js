const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Backend API running ...")

});

app.use("/", userRoutes);

app.listen(5000, () => {

    console.log("Server running on port 5000");
});
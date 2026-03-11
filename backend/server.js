const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Backend API running ...")

});

app.get("/users", (req, res) => {

    const users = [
        { id: 1, name: "Swapnil" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Biscoff" }

    ];
    res.json(users);

});

app.listen(5000, () => {

    console.log("Server running on port 5000");
});
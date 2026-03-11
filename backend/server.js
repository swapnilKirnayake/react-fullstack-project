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

app.get("/users/:id", (req, res) => {
const users = [
{id: 1, name: "Swapnil"},
{id: 2, name: "Alex"},
{id: 3, name: "Biscoff"}
];

const userId = parseInt(req.params.id);
const user = users.find(u => u.id === userId);

res.json(user);
});

app.post("/users", (req, res) => {

    const newUser = req.body;

    res.json({
        message: "User created successfully",
        user: newUser
    });

});

app.listen(5000, () => {

    console.log("Server running on port 5000");
});
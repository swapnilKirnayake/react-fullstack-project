const users = require("../data/users");

const getUsers = (req, res) =>{
    res.json(users);
};

const getUserById = (req, res) =>{
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    res.json(user);
};

const createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);

    res.json(newUser);
};

module.exports = {
    getUsers,
    getUserById,
    createUser
};
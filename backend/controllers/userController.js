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

const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if(!user) {
        return res.status(404).json({message: "User not found"});
    };

    user.name = req.body.name;
    res.json(user);
};

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);

    if(index === -1) {
        return res.status(404).json({message: "User not found" });
    }

    const deletedUser = users.splice(index, 1);
    res.json({message: "User deleted successfully", 
        user: deletedUser[0]
    });


};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
// ALL REQUEST CONTROLLERS
import User from "../models/User.js"

// POST REQUEST
export const createUser = async (req, res) => {
    const { name, email, phone, address } = req.body;

    const createdUser = new User({ name, email, phone, address });

    try {
        insertedUser = await createdUser.save();

        res.status(201).send(insertedUser);
    }

    catch (err) {
        res.status(409).send(err);
    }
};

// GET REQUESTS
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.send(users);
    }

    catch (error) {
        res.status(404).send(err);
    }
}

// GET INDIVISUAL REQUEST
export const getUser = async (req, res) => {
    try {
        const _id = req.params.id
        const user = await User.findById(_id);

        res.status(200).send(user);
    }

    catch (err) {
        res.status(404).send(err);
    }
};

// UPDATE INDIVISUAL REQUEST
export const updateUser = async (req, res) => {
    const user = req.body;

    try {
        const _id = req.params.id
        const newUser = await User.findByIdAndUpdate(_id, user, {new: true});

        res.status(204).send(newUser);
    }

    catch (err) {
        res.status(404).send(err);
    }
};

// DELETE INDIVISUAL REQUEST
export const deleteUser = async (req, res) => {

    try {
        const _id = req.params.id
        const user = await User.findByIdAndDelete(_id);

        res.status(204).send(user);
    }

    catch(err) {
        res.status(404).send(err);
    }
};
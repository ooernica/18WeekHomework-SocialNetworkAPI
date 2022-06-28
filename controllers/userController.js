const { isEmail } = require('validator');
const { User } = require('../models');

module.exports = {
    createUser: async (req, res) => {
        const { handle, email } = req.body;
        if (!isEmail(email)) {
            return res.status(401).json({ error: 'Invalid email.' });
        }
        try {
            const newUser = await User.create({
                handle,
                email,
            });
            res.json(NewUser);
        } catch (e) {
            res.json(e);
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (e) {
            res.json(e);
        }
    },

    getUserById: async (req, res) => {
        const { userId } = req.params;
        try {
            const user = await User.findById(userId);
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },

    updateUserById: async (req, res) => {
        const { userId } = req.params;
        try {
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                {...req.body},
                {
                    new: true,
                    runValidators: true,
                }
            );
            res.json(updatedUser);
        } catch (e) {
            res.json(e);
        }
    },

    deleteUserById: async (req, res) => {
        const { userId } = req.params;
        try {
            const deletedUser = await User.findByIdAndDelete(userId);
            res.json(deletedUser);
        } catch (e) {
            res.json(e);
        }
    },

    addFollowerToUserById: async (req, res) => {
        const { userId, followerId } = req.params;
        try {
            const updatedUser = await User.findByIdAndUpdate(userId,
                {
                    $push: {
                        followers: followerId,
                    },
                },
                {
                    new: true,
                }
            );
            res.json(updatedUser);
        } catch (e) {
            res.json(e);
        }
    },

    deleteFollowerToUserById: async (req, res) => {
        const { userId, followerId } = req.params;
        try {
            const updatedUser = await User.findByIdAndUpdate(userId,
                {
                    $pull: {
                        followers: followerId,
                    },
                },
                {
                    new: true,
                }
            );
            res.json(updatedUser);
        } catch (e) {
            res.json(e);
        }
    },
};
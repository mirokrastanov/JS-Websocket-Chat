import User from "../models/user.model.js";
import { genAvatar } from "../utils/avatarUtils.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // TODO: HASH Password

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: genAvatar(fullName),
        });

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = (req, res) => {
    console.log('loginUser');
};

export const logout = (req, res) => {
    console.log('logoutUser');
};

const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//@desc Get all users
//@route GET /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('All field are mandatory');
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error('User already exist');
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('the hashed password is: ', hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(`User Created ${user}`);
    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

//@desc  Login user
//@route POST /api/login/:id
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('All field are mandatory');
    }
    const user = await User.findOne({ email });

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch && user) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
});

//@desc Current User Info
//@route POST /api/users/current
//@access Private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: 'current User info' });
});

module.exports = { registerUser, loginUser, currentUser };

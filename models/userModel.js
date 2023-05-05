const mongoose = require('mongoose');

const userScheme = mongoose.Schema(
    {
        username: {
            type: String,
            require: [true, 'Please add the username'],
        },
        email: {
            type: String,
            require: [true, 'Please add email address'],
            unique: [true, 'Email address must be unique'],
        },
        password: {
            type: String,
            require: [true, 'Please add password'],
        },
    },
    { timeStamps: true }
);


module.exports = mongoose.model('User', userScheme);

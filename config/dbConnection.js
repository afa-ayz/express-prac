const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = async () => {
    try {
        console.log('>>>>>>>>>>>' + process.env.CONNECT_STRING);
        const connect = await mongoose.connect(process.env.CONNECT_STRING);
        console.log('data base connected' + connect.connection.host, connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;

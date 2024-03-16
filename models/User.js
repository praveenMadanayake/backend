const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
    userName: String,
    phoneNumber: String,
    email: String,
    address: String,
    password: { type: String, unique: true },
    userType: String,
    },
    {
    collection: "User",
    }
);

module.exports = mongoose.model('User',userSchema);
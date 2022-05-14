const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    coins: Number,
    token: String
});

UserSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
UserSchema.statics.decryptPassword = async (incomingPassword, password) => {
    return await bcrypt.compare(incomingPassword, password)
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
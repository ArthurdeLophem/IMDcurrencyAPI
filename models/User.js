const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: { required: true, type: 'string' },
    email: { required: true, type: 'string' },
    password: { required: true, type: 'string' },
    coins: Number
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
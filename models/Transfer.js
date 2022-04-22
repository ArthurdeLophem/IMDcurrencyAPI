const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransferSchema = new Schema({
    message: String,
    from_user: String,
    amount: String,
    completed: Boolean
})
const Transfer = mongoose.model('Transfer', TransferSchema);

module.exports = Transfer;
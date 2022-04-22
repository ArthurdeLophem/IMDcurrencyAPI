const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransferSchema = new Schema({
    message: String,
    from_user: String,
    amount: String,
    completed: Boolean
})
const Transfer = mongoose.model('Transfer', TransferSchema);

const getAll = (req, res) => {
    Transfer.find({}, (err, docs) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "transfers": docs
                }
            })
        }
    })


}

const create = (req, res) => {
    let transfer = new Transfer();
    transfer.message = "hey geef je mij mijn geld terug ajb dankjewel";
    transfer.from_user = "uid_9918";
    transfer.amount = "8";
    transfer.completed = false;
    transfer.save((err, doc) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "transfers": {
                        "transfer": doc
                    }
                }
            })
        };

    })


}

module.exports.getAll = getAll;
module.exports.create = create;
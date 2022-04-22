const Transfer = require('../models/Transfer');

const getAll = (req, res) => {
    Transfer.find({}, (err, docs) => {
        if (err) {
            res.json({
                "status": "failed",
                "message": "couldn't get any documents"
            })
        }
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
    transfer.message = req.body.message;
    transfer.user = req.body.user;
    transfer.amount = req.body.amount;
    transfer.completed = req.body.completed;
    transfer.save((err, doc) => {
        if (err) {
            res.json({
                "status": "failed",
                "message": "couldn't save documents"
            })
        }
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
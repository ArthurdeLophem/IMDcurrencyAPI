const Transfer = require('../../../models/api/v1/Transfer');

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

const getById = async (req, res) => {
    try {
        const data = await Transfer.findById(req.params.id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
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
module.exports.getById = getById;
module.exports.create = create;
const Transfer = require('../../../models/api/v1/Transfer');

const getAllByUserId = (req, res) => {
    Transfer.find({
        $or: [
            {
                "user": req.user._id
            },
            {
                "to_user": req.user._id
            }
        ].sort({ date: -1 })

    }, (err, docs) => {
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
    transfer.user = req.body._id;
    transfer.to_user = req.body.to_user;
    transfer.amount = req.body.amount;
    transfer.completed = req.body.completed;
    transfer.date = Date.now();
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

module.exports.getAll = getAllByUserId;
module.exports.getById = getById;
module.exports.create = create;
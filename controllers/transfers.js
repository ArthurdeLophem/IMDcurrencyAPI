const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "transfers": []
        }
    })
}

const create = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "transfers": {
                "text": "transaction 215"
            }
        }
    })
}

module.exports.getAll = getAll;
module.exports.create = create;
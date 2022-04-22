var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "transfers": []
        }
    })
})

router.post("/", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "transfers": {
                "text": "transaction 215"
            }
        }
    })
})

module.exports = router;
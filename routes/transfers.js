const express = require('express');
const router = express.Router();
const transfersController = require("../controllers/transfers");

router.get("api/v1/", transfersController.getAll);
router.get("api/v1/:id", transfersController.getById);
router.post("api/v1/", transfersController.create);

module.exports = router;
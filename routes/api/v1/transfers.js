const express = require('express');
const router = express.Router();
const transfersController = require("../../../controllers/api/v1/transfers");

router.get("/:user", transfersController.getAllByUserId);
//router.get("/:id", transfersController.getById);
router.post("/", transfersController.create);

module.exports = router;
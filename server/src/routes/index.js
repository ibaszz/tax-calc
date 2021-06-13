const { Router } = require('express');
const taxController = require('../controller/taxAPI');

const router = Router();

// Tax API
router.post("/tax", taxController);

module.exports = router;
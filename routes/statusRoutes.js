const express = require('express');
const { checkStatus } = require('../controllers/statusController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/status', authMiddleware, checkStatus);

module.exports = router;
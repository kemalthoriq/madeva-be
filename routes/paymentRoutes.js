const express = require('express');
const { reportPayment } = require('../controllers/paymentController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/payment', authMiddleware, reportPayment);

module.exports = router;
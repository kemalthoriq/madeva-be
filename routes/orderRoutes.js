const express = require('express');
const { createOrder } = require('../controllers/orderController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/order', authMiddleware, createOrder);

module.exports = router;
// controllers/orderController.js
const Order = require('../models/order');

exports.createOrder = async(req, res) => {
    const { amount, reff, expired, name, hp } = req.query;
    if (amount <= 0) return res.status(400).json({ error: 'Amount must be positive' });

    const code = `8834${hp}`;
    const totalAmount = parseInt(amount) + 2500;

    const order = await Order.create({ amount: totalAmount, reff, expired, name, hp, code });
    return res.json(order);
};
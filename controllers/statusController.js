const Order = require('../models/order');

exports.checkStatus = async(req, res) => {
    const { reff } = req.query;

    const order = await Order.findOne({ where: { reff } });
    if (!order) return res.status(403).json({ error: 'Unknown reference' });

    return res.json(order);
};
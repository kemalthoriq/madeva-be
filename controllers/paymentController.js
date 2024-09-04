const Payment = require('../models/payment');
const Order = require('../models/order');
const BackupTransaction = require('../models/backupTransaction');

exports.reportPayment = async(req, res) => {
    const { reff } = req.query;

    const order = await Order.findOne({ where: { reff } });
    if (!order) return res.status(403).json({ error: 'Unknown reference' });

    if (order.status === 'paid') return res.status(403).json({ error: 'Payment already made' });

    const payment = await Payment.create({
        amount: order.amount,
        reff,
        name: order.name,
        expired: order.expired,
        paid: new Date(),
        code: order.code,
        status: 'paid'
    });

    order.status = 'paid';
    await order.save();

    // Backup transaction using Bull job queue
    await BackupTransaction.create({
        amount: payment.amount,
        reff: payment.reff,
        name: payment.name,
        expired: payment.expired,
        paid: payment.paid,
        code: payment.code,
        status: payment.status,
    });

    return res.json(payment);
};
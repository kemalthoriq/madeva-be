// controllers/dashboardController.js
const Payment = require('../models/payment');

exports.getDashboard = async(req, res) => {
    const { reff } = req.query;

    const payments = reff ?
        await Payment.findAll({ where: { reff } }) :
        await Payment.findAll();

    res.render('dashboard', { payments });
};
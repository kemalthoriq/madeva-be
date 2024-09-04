const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Order extends Model {}

Order.init({
    amount: DataTypes.INTEGER,
    reff: DataTypes.STRING,
    name: DataTypes.STRING,
    hp: DataTypes.STRING,
    code: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'Order',
});

module.exports = Order;
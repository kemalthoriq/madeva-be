'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BackupTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BackupTransaction.init({
    amount: DataTypes.INTEGER,
    reff: DataTypes.STRING,
    name: DataTypes.STRING,
    expired: DataTypes.DATE,
    paid: DataTypes.DATE,
    code: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BackupTransaction',
  });
  return BackupTransaction;
};
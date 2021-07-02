'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer)
      Order.belongsToMany(models.Produk, { through: 'OrderItems' })
    }
  };
  Order.init({
    kodeTransaksi: {
      type: DataTypes.STRING
    },
    kurir: {
      type: DataTypes.STRING
    },
    NomorResi: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
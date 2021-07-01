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
      Order.belongsToMany(models.Produk, {through: 'OrderItems'})
    }
  };
  Order.init({
    kodeTransaksi: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'transaction code cannot be empty'
        }
      }
    },
    kurir: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'kurir cannot be empty'
        }
      }
    },
    NomorResi: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Nomor resi cannot be empty'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'status cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
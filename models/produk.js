'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produk.belongsToMany(models.User, { through: models.Keranjang })
      Produk.belongsToMany(models.Order, { through: models.OrderItem })
    }
  };
  Produk.init({
    namaProduk: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    jumlahStok: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};
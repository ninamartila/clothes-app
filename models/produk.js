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
      Produk.belongsTo(models.Admin)
      Produk.belongsToMany(models.Order, { through: 'OrderItems' })
    }
  };
  Produk.init({
    namaProduk: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    images: DataTypes.TEXT,
    stok: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};
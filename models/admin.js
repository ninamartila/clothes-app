'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.hasMany(models.Produk)
    }
  };
  Admin.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'first name cannot be empty'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'last name cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'email cannot be empty'
        },
        isEmail: {
          msg: 'please enter the right email'
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'phone number cannot be empty'
        }
      }
    },
    alamat: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty:{
          msg: 'phone number cannot be empty'
        },
        isUrl:{
          msg: 'Please enter the right url'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'phone number cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'password cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};
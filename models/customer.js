'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Order)
    }
  };
  Customer.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'first name cannot be empty'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'last name cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
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
        notEmpty: {
          msg: 'phone number cannot be empty'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
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
    modelName: 'Customer',
  });
  return Customer;
};
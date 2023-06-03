const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Import the Product model
const Product = require('./Product')

// Import the Tag model 
const Tag = require('./Tag')

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        // Reference the Product model
        model: Product,
        // Reference the 'id' column of the Product model
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        // Reference the Tag model
        model: Tag,
        // Reference the 'id' column of the Tag model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

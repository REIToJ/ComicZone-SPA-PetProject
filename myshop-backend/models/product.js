module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'category_id',
      },
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Product;
};

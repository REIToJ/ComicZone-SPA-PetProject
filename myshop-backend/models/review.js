module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'product_id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'user_id',
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return Review;
};

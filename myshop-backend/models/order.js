module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'user_id',
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Order;
};

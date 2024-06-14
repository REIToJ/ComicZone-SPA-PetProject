const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Category = require('./category')(sequelize, Sequelize);
const Product = require('./product')(sequelize, Sequelize);
const Order = require('./order')(sequelize, Sequelize);
const Review = require('./review')(sequelize, Sequelize);

// Associations
Product.belongsTo(Category, { foreignKey: 'category_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });
Review.belongsTo(Product, { foreignKey: 'product_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  User,
  Category,
  Product,
  Order,
  Review,
  sequelize,
};

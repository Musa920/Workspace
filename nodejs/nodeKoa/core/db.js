const Sequlize = require('sequelize');
const { dbName, host, port, user, password } = require('../config/config').database;
const sequelize = new Sequlize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: false,
  timezone: '+08:00',
  define: {
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
  }
});

sequelize.sync({
  force: true
})

module.exports = { sequelize };
const Sequlize = require('sequelize');
const { Model } = require('sequelize');
const { unset, clone, isArray } = require('lodash');
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
    scopes: {
      bh: {
        attributes: {
          exclude: ['updated_at', 'deleted_at', 'created_at']
        }
      }
    }
  }
});

sequelize.sync({
  force: false
})

// JSON 序列化
Model.prototype.toJSON = function () {
  let data = clone(this.dataValues)
  unset(data, 'updated_at')
  unset(data, 'created_at')
  unset(data, 'deleted_at')

  for (key in data) {
    if (key === 'image') {
      if (!data[key].startsWith('http'))
        data[key] = `${global.config.host}${data[key]}`
    }
  }

  if (isArray(this.exclude)) {
    this.exclude.forEach(item => {
      unset(data, item)
    })
  }
  return data
}

module.exports = { sequelize };
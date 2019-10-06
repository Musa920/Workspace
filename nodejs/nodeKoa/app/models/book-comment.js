const { sequelize } = require('../../core/db');

const {
  Sequelize,
  Model,
} = require('sequelize');

class Comment extends Model {
  static async addComment(bookId, content) {
    const result = await Comment.findOne({
      where: {
        book_id: bookId,
        content
      }
    })
    if (!result) {
      return await Comment.create({
        book_id: bookId,
        content,
        nums: 1
      })
    } else {
      return await result.increment('nums', {
        by: 1
      })
    }
  }

  static async getComments(bookId) {
    const comments = await Comment.findAll({
      where: {
        book_id: bookId
      }
    })
    return comments
  }

  // JSON 序列化控制
  // toJSON() {
  //   return {
  //     content: this.getDataValue('content'),
  //     nums: this.getDataValue('nums')
  //   }
  // }
}

Comment.init({
  content: Sequelize.STRING(12),
  nums: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  book_id: Sequelize.INTEGER
}, {
  sequelize,
  tableName: 'comment'
})

module.exports = {
  Comment
}
const { sequelize } = require('../../core/db');

const {
  Sequelize,
  Model,
  Op
} = require('sequelize');

const { Art } = require('@models/art');

class Favor extends Model {
  // 点赞
  static async like(art_id, type, uid) {
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid
      }
    })
    if (favor) {
      throw new global.errs.LikeError();
    }

    return sequelize.transaction(async t => {
      await Favor.create({
        art_id,
        type,
        uid
      }, {
        transaction: t
      })

      const art = await Art.getData(art_id, type, false);
      await art.increment('fav_nums', {
        by: 1,
        transaction: t
      })
    })
  }

  // 取消赞
  static async disLike(art_id, type, uid) {
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid
      }
    })
    if (!favor) {
      throw new global.errs.DislikeError();
    }

    return sequelize.transaction(async t => {
      await favor.destroy({
        force: true,
        transaction: t
      })

      const art = await Art.getData(art_id, type, false);
      await art.decrement('fav_nums', {
        by: 1,
        transaction: t
      })
    })
  }

  // 查询当前的用户是否喜欢当前的文章/音乐/视频
  static async userLikeIt(art_id, type, uid) {
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid
      }
    });
    return favor ? true : false
  }

  // 查询所有喜欢的期刊
  static async getMyClassicFavors(uid) {
    const arts = await Favor.findAll({
      where: {
        uid,
        type: {
          [Op.not]: 400
        }
      }
    })
    if (!arts) {
      throw new global.errs.NotFound();
    }

    return await Art.getList(arts);
  }

  // 获取书籍点赞情况
  static async getBookFavor(bookId, uid) {
    const favorNums = await Favor.count({
      where: {
        art_id: bookId,
        type: 400
      }
    });

    const like_status = await Favor.findOne({
      where: {
        art_id: bookId,
        uid,
        type: 400
      }
    })

    return {
      fav_nums: favorNums,
      like_status: like_status ? true : false
    }
  }
}

Favor.init({
  uid: Sequelize.INTEGER,
  art_id: Sequelize.INTEGER,
  type: Sequelize.INTEGER
}, {
  sequelize,
  tableName: 'favor'
});

module.exports = {
  Favor
}
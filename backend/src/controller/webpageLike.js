const { SgetLikeStatus, SLikeWebsite, SgetLikeCount } = require('../service/webpageLike');

const CgetLikeStatus = async (req, res, next) => {
  const liked = await SgetLikeStatus(req?.query?.id)
  res.send({
    data: {
      liked
    }
  })
}

const CLikeWebpage = async (req, res, next) => {
  const id = req?.query?.id;
  let success = false, reason = '';
  if (id) {
    const success = SLikeWebsite(id);
  } else {
    success = false;
    reason = '没有提供 id';
  }
  res.send({
    data: {
      success,
    },
    reason,
  });
}

const CgetLikeCount = async (req, res, next) => {
  const count = await SgetLikeCount();
  res.send({
    data: {
      count
    }
  });
}

module.exports = {
  CgetLikeStatus,
  CLikeWebpage,
  CgetLikeCount
}
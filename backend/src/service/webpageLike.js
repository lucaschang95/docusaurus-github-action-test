const database = require('../database');

const SgetLikeStatus = async (id) => {
  return database?.getLikeStatus(id);
};

const SLikeWebsite = async (id) => {
  let succ;
  try {
    const res = await database?.likeWebsite(id);
  } catch(e) {
    succ = false;
  }
  return succ;
};

const SgetLikeCount = async () => {
  const count = await database?.getLikeCount();
  return count;
}

module.exports = {
  SgetLikeStatus,
  SLikeWebsite,
  SgetLikeCount
}
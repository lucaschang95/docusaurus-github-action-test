const { CgetLikeStatus, CLikeWebpage, CgetLikeCount } = require("../controller/webpageLike");

const express = require('express');

const indexRouter = express.Router();
// getLikeStatus
indexRouter.get('/webpage-like/status', CgetLikeStatus);
indexRouter.get('/webpage-like/like', CLikeWebpage);
indexRouter.get('/webpage-like/like/count', CgetLikeCount);

module.exports = indexRouter;
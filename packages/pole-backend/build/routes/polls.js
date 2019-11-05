'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const router = require('express').Router();
const verifyToken_1 = require('../auth/verifyToken');
router.get('/', verifyToken_1.verify, (req, res) => {
  res.json({
    posts: {
      title: 'my first post',
      description: 'random data you should not access',
    },
  });
});
module.exports = router;
//# sourceMappingURL=polls.js.map

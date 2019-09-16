'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const router = require('express').Router();
router.get('/', (req, res) => {
  res.json({
    posts: {
      title: 'my first post',
      description: 'random data you should not access',
    },
  });
});
module.exports = router;
//# sourceMappingURL=poles.js.map

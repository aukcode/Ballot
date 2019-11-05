const router = require('express').Router();
import { verify } from '../auth/verifyToken';
import { Request, Response } from 'express';
// a poll needs a conductionDate!
router.get('/', verify, (req: Request, res: Response) => {
  res.json({
    posts: {
      title: 'my first post',
      description: 'random data you should not access',
    },
  });
});

module.exports = router;

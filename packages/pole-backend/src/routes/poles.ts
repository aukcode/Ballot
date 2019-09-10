const router = require('express').Router();
const verify = require('../auth/verifyToken');
import { Request, Response } from 'express';

router.get(
  '/',
  /*verify,*/ (req: Request, res: Response) => {
    res.json({
      posts: {
        title: 'my first post',
        description: 'random data you should not access',
      },
    });
  }
);

module.exports = router;

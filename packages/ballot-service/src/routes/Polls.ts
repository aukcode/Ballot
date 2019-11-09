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

router.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).send(`id: ${id}`);
});

router.post('/new', (req: Request, res: Response) => {
  const poll = req.body.poll;
  res.status(200).send(`poll: ${poll}`);
});

router.patch('/:id', (req: Request, res: Response) => {
  const poll = req.body.poll;
  res.status(200).send(`poll: ${poll}`);
});

router.delete('/:id', (req: Request, res: Response) => {
  const poll = req.body.poll;
  res.status(200).send(`poll: ${poll}`);
});

module.exports = router;

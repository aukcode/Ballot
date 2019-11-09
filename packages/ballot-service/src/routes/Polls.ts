const router = require('express').Router();
import { verify } from '../auth/verifyToken';
import { Request, Response } from 'express';
const Poll = require('../schemas/Poll');
import v4 = require('uuid/v4');

router.get('/:id', async (req: Request, res: Response) => {
  const poll = await Poll.findOne({ _id: req.params.id });
  res.status(200).send(`poll: ${poll}`);
});

router.post('/new', async (req: Request, res: Response) => {
  const newPoll = new Poll({
    id: v4(),
    pollPin: generate(6),
    title: req.body.title,
    questions: req.body.questions,
  });

  try {
    await newPoll.save();
    res.status(200).send(newPoll);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch('/:id', (req: Request, res: Response) => {
  const poll = req.body.poll;
  res.status(200).send(`poll: ${poll}`);
});

router.delete('/:id', (req: Request, res: Response) => {
  const poll = req.body.poll;
  res.status(200).send(`poll: ${poll}`);
});

function generate(n) {
  var add = 1,
    max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

  if (n > max) {
    return generate(max) + generate(n - max);
  }

  max = Math.pow(10, n + add);
  var min = max / 10; // Math.pow(10, n) basically
  var number = Math.floor(Math.random() * (max - min + 1)) + min;

  return ('' + number).substring(add);
}

module.exports = router;

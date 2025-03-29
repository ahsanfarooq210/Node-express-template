import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/me', async (req: Request, res: Response) => {
  res.json({});
  return;
});

export default router;

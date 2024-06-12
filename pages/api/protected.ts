// pages/api/protected.ts
import auth from '@/lib/database/middleware/auth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'This is a protected route' });
};

export default auth(handler);

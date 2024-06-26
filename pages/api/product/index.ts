import { getAllProducts } from '@/lib/database/controllers/ProductController';
import connectDB from '@/lib/database/mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const products = await getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
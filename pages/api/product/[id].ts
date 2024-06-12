import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../lib/database/mongoose';
import { getProductById } from '../../../lib/database/controllers/ProductController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'GET') {
    const { id } = req.query;
    try {
      const product = await getProductById(id as string);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
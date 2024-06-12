// pages/api/auth/register.ts
import connectDB from '@/lib/database/mongoose';
import User from '@/lib/database/models/User';
import { NextApiRequest, NextApiResponse } from 'next';
import { registerUser } from '@/lib/database/controllers/UserController';

connectDB();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, email, password, phone, avatar } = req.body;
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const user = await registerUser(username, email, password, phone, avatar)

      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

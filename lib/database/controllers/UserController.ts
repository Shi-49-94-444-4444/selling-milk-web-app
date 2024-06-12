// lib/database/controllers/UserController.ts
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';

export const registerUser = async (username: string, email: string, password: string, phone: string, avatar: string): Promise<IUser> => {
    const user = new User({ username, email, password, phone, avatar });
    await user.save();
    return user;
};

export const loginUser = async (userId: string): Promise<string> => {
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }
  
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
    return token;
  };
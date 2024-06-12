// lib/database/models/Product.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  name: string;
  price: number;
  img: string;
  sale: number;
  supplier: string;
  title: number;
}

const ProductSchema: Schema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  sale: { type: Number, required: true },
  supplier: { type: String, required: true },
  title: { type: Number, required: true },
});

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;

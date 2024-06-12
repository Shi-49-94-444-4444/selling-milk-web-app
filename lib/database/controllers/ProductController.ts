import Product, { IProduct } from '../models/Product';

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error('Error getting products');
  }
};

export const getProductById = async (productId: string): Promise<IProduct | null> => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw new Error('Error getting product');
  }
};

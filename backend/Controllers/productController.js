import Product from '../Models/ProductModel.js';
import asyncHandler from 'express-async-handler';

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json({ products });
});

const getSingleProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const product = await Product.findById(id);
  res.json({ product });
});
export { getAllProducts, getSingleProduct };

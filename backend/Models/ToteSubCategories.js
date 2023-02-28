import mongoose from 'mongoose';

const ToteSubCategorySchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const ToteSubCategory = mongoose.model(
  'ToteSubCategory',
  ToteSubCategorySchema
);

export default SchrunchieSubCategory;

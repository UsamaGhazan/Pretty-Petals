import mongoose from 'mongoose';

const ScrunchieSubCategorySchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const SchrunchieSubCategory = mongoose.model(
  'SchrunchieSubCategory',
  ScrunchieSubCategorySchema
);

export default SchrunchieSubCategory;

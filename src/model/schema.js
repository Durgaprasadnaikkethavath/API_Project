const mongoose = require("mongoose");

const createAPIProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  nutritionalInfo: {
    calories: Number,
    macronutrients: {
      protein: Number,
      fat: Number,
      carbohydrates: Number,
      sugar: Number,
      fiber: Number,
    },
    micronutrients: {
      vitamins: Map,
      minerals: Map,
    },
    sodium: Number,
    cholesterol: Number,
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: String,
  certifications: [String],
  countryOfOrigin: String,
  brandOrManufacturer: String,
  dietaryRestrictions: [String],
  healthBenefits: String,
  bestPractices: String,
});

const createAPIProjectItems = new mongoose.model(
  "createAPIProjectItems",
  createAPIProjectSchema
);

module.exports = createAPIProjectItems;

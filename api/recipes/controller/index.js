'use strict';
const httpStatusCode = require('http-status-codes');
const mongoose = require('mongoose');
const ProductSquema = require('../../models/recipe')
const RecipeModel = mongoose.model('Recipe', ProductSquema);

class RecipeController {
    constructor() {}

    async find(recipe) {
        let response = await RecipeModel.find( recipe.id ? {
            _id: recipe.id
         }: {});
         return response;
    }

    async create(recipe) {
        let newRecipe = await RecipeModel.findOneAndUpdate({
        category: recipe.category,
        name: recipe.name,
        description: recipe.description,
        amount: recipe.amount,
        unit: recipe.unit,
        calories: recipe.calories,
        protein: recipe.protein,
        carbs: recipe.carbs,
        fats: recipe.fats,
        sugar: recipe.sugar,
        sodium: recipe.sodium,
        products: recipe.products
        }, recipe, {
            upsert: true,
            new: true
        });
        return newRecipe;
    }

    async delete(recipe) {
        let response = await RecipeModel.findOneAndDelete({
            id: recipe.id
        });
        return response;
    }

}
module.exports = new RecipeController; 
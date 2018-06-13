'use strict';
const httpStatusCode = require('http-status-codes');
const ProductModel = require('../../models/product');

class ProductController {
    constructor() {}

    async find(product) {
        let response = await ProductModel.find( product.id ? {
            _id: product.id
         }: {});
         return response;
    }

    async create(product) {
        let newProduct = await ProductModel.findOneAndUpdate({
        category: product.category,
        name: product.name,
        description: product.description,
        amount: product.amount,
        unit: product.unit,
        calories: product.calories,
        protein: product.protein,
        carbs: product.carbs,
        fats: product.fats,
        sugar: product.sugar,
        sodium: product.sodium
        }, product, {
            upsert: true,
            new: true
        });
        return newProduct;
    }

    async delete(product) {
        let response = await ProductModel.findOneAndDelete({
            id: product.id
        });
        return response;
    }

}
module.exports = new ProductController; 
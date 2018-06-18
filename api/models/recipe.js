const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Product = require('./product');

module.exports = new Schema(
    {
        category: {
            type: String,
            enum: ['Carnes', 'Pastas', 'Arroces', 'Pescados', 'Pollo', 'Otros']
        },
        name: String,
        description: String,
        amount: { type: Number, default: 100},
        unit: String,
        calories: Number,
        protein: Number,
        carbs: Number,
        fats: Number,
        sugar: Number,
        sodium: Number,
        products: [Product]
    });
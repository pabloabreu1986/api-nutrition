const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Product = new Schema(
    {
        category: {
            type: String,
            enum: ['Carne', 'Pasta', 'Fruta', 'Pescado', 'Pollo', 'Otros']
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
        sodium: Number
    });

const Recipe = new Schema(
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

module.exports = mongoose.model('Recipe', Recipe);
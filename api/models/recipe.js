const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Recipe = new Schema(
    {
        category: {
            type: String,
            enum: ['Carnes', 'Pastas', 'Arroces', 'Pescados', 'Pollo']
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
        pruducts: Array
    });

module.exports = mongoose.model('Product', Product);
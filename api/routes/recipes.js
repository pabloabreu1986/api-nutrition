var express = require('express');
var router = express.Router();
var asyncMiddleware = require('./../middleware/async');

/* CONTROLLERS */

const recipeController = require('./../recipe/controller');

/* ROUTES */

router.get('/recipes', asyncMiddleware(async (req, res, next) => {
    let recipeToSearch = {
      id: req.query._id
    };
    let recipe = await recipeController.find(recipeToSearch);
    res.json({
        mesage: 'Hola..',
        recipe
    });
}));

router.post('/recipes', asyncMiddleware(async (req, res, next) => {
    let recipe = {
        category: req.body.category,
        name: req.body.name,
        description: req.body.description,
        amount: req.body.amount,
        unit: req.body.unit,
        calories: req.body.calories,
        protein: req.body.protein,
        carbs: req.body.carbs,
        fats: req.body.fats,
        sugar: req.body.sugar,
        sodium: req.body.sodium,
        pruducts: req.body.pruducts
    };
    let newRecipe = await recipeController.create(recipe);
    res.json(newRecipe);
}));

router.delete('/recipes', asyncMiddleware(async (req, res, next) => {
    let recipe = {
        id: req.body._id
    };
    let deletedRecipe = await recipeController.delete(recipe);
    res.json(deletedRecipe);
}));


module.exports = router;
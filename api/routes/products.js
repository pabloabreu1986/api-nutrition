var express = require('express');
var router = express.Router();
var asyncMiddleware = require('./../middleware/async');

/* CONTROLLERS */

const productController = require('./../products/controller');

/* ROUTES */

router.get('/products', asyncMiddleware(async (req, res, next) => {
    let productToSearch = {
      id: req.query._id
    };
    let product = await productController.find(productToSearch);
    res.json({
        mesage: 'Hola..',
        product
    });
}));

router.post('/products', asyncMiddleware(async (req, res, next) => {
    let product = {
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
        sodium: req.body.sodium
    };
    let newProduct = await productController.create(product);
    res.json(newProduct);
}));

router.delete('/products', asyncMiddleware(async (req, res, next) => {
    let product = {
        id: req.body._id
    };
    let deletedProduct = await productController.delete(product);
    res.json(deletedProduct);
}));


module.exports = router;
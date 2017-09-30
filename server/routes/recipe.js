const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var Recipe = require('../models/recipe');
var User = require('../models/user');

router.get('/', (req, res, next) => {
    Recipe.find()
        .exec((err, recipe) => {
            if (err) {
                return res.status(500).json({
                    type: 'Server',
                    title: 'An error occured',
                    error: err,
                    severity: 'Error'
                });
            }

            res.status(200).json({
                message: 'Successfully retrieved the recipes',
                record: recipe
            });
        });
});

// Implement the backend route protection here later as well
router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                type: 'User',
                title: 'Not authorized',
                error: err,
                severity: 'Error'
            });
        }

        next();
    })
});

router.post('/', (req, res, next) => {
    const decoded = jwt.decode(req.query.token);

    User.findById(req.query.userid, function(err, user) {
        if (err) {
            return res.status(500).json({
                type: 'Server',
                title: 'An error occured',
                error: err,
                severity: 'Error'
            });
        }

        const recipe = new Recipe({
            recipe_name: req.body[0].recipe_name,
            preperation: req.body[0].preperation,
            ingredients: req.body[0].ingredients,
            category: req.body[0].category,
            date_created: req.body[0].date_created,
            date_updated: req.body[0].date_updated,
            user: user._id,
            username: user.first_name
        });

        recipe.save((err, createdRecipe) => {
            if (err) {
                return res.status(500).json({
                    type: 'Server',
                    title: 'Error in adding a recipe record',
                    error: err,
                    severity: 'Error'
                });
            }

            user.recipes.push(createdRecipe);
            user.save();

            res.status(201).json({
                title: 'Recipe saved',
                message: 'Thank you for your contribution to the platform',
                record: createdRecipe,
                severity: 'Information',
                type: 'User'
            });
        });
    })
});

router.patch('/:id',  (req, res, next) => {
    Recipe.findById(req.params.id, (err, recipe) => {
        if (err) {
            return res.status(500).json({
                type: 'Server',
                title: 'An error occured',
                error: err,
                severity: 'Error'
            });
        }

        if (!recipe) {
            res.status(404).json({
                type: 'Application',
                title: 'Recipe could not be found',
                error: {message: "The recipe sought for with id: " + req.params.id + " could not be found"},
                severity: 'Error'
            });
        }

        if (recipe.user !== req.query.userid) {
            rest.status(401).json({
                type: 'User',
                title: 'Not authenticated',
                error: {message: "You are not allowed to modify the recipes of another user"},
                severity: 'Information'
            });
        }

        // Add code for actually allowing the update to take place
    })
});

router.delete('/:id', (req, res, next) => {
    Recipe.findById(req.params.id, function (err, recipe) {
        if (err) {
            return res.status(500).json({
                type: 'Server',
                title: 'An error occured',
                error: err,
                severity: 'Error'
            });
        }

        if (!recipe) {
            return res.status(404).json({
                type: 'Application',
                title: 'No recipe could be found',
                error: {message: 'Recipe could not be found'},
                severity: 'Error'
            });
        }

        if (recipe.user !== req.query.userid) {
            rest.status(401).json({
                type: 'User',
                title: 'Not authenticated',
                error: {message: "You are not allowed to delete the recipes of someone else"},
                severity: 'Information'
            });
        }

        recipe.remove((err, result) => {
            if (err) {
                return res.status(500).json({
                    type: 'Server',
                    title: 'An error during removing occured',
                    error: err,
                    severity: 'Error'
                });
            }
        })
    })
});

module.exports = router;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const User = require('./user');

const recipeSchema = new Schema({
    recipe_name: { type: String, required: true, unique: true },
    preperation: { type: String, required: true, unique: true },
    image_path: { type: String, required: false, unique: true },
    ingredients: { type: Object, required: false },
    category: { type: String, required: false },
    preparation_time: { type: Number, required: false },
    costs_per_person: {type: Number, required: false},
    date_created: { type: Date, required: true },
    date_updated: { type: Date, required: false },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    username: { type: String, required: false}
});

recipeSchema.plugin(mongooseUniqueValidator);


// Deleting the recipe from the user's recipes array
recipeSchema.post('remove', function(recipe) {
    User.findById(recipe.user, function(err, user) {
        if (err) {
            console.log('Middleware error while removing a recipe: ' + err);
        }
        user.recipes.pull(recipe);
        user.save();
    });
});

module.exports = mongoose.model('Recipe', recipeSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Recipe = require('./recipe');

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}]
});

//  birth_of_date: {type: Schema.Types.Date},

// In case of an array 
// messages: [{ type: Schema.Types.ObjectId}, ref: 'Message']

// To create joins use ref in both models

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);
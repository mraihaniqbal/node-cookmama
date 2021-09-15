'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var IngredientsSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the ingredient.'
  },
  quantity: {
    type: Number,
    required: 'Kindly input quantity of ingredient.'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Ingredients', IngredientsSchema);
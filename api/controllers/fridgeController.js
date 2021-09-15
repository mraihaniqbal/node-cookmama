'use strict';

var mongoose = require('mongoose'),
  Ingredient = mongoose.model('Ingredients');

exports.list = function(req, res) {
  Ingredient.find({}, function(err, ingredient) {
    if (err)
      res.send(err);
    res.json(ingredient);
  });
};




exports.add = function(req, res) {
  var new_task = new Ingredient(req.body);
  new_task.save(function(err, ingredient) {
    if (err)
      res.send(err);
    res.json(ingredient);
  });
};


exports.view = function(req, res) {
  Ingredient.findById(req.params.ingredientId, function(err, ingredient) {
    if (err)
      res.send(err);
    res.json(ingredient);
  });
};


exports.update = function(req, res) {
  Ingredient.findOneAndUpdate({_id: req.params.ingredientId}, req.body, {new: true}, function(err, ingredient) {
    if (err)
      res.send(err);
    res.json(ingredient);
  });
};


exports.delete = function(req, res) {


  Ingredient.remove({
    _id: req.params.ingredientId
  }, function(err, ingredient) {
    if (err)
      res.send(err);
    res.json({ message: 'Ingredient successfully removed.' });
  });
};
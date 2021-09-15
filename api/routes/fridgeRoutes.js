'use strict';
module.exports = function(app) {
  var fridge = require('../controllers/fridgeController');

  // todoList Routes
  app.route('/fridge')
    .get(fridge.list)
    .post(fridge.add);


  app.route('/fridge/:ingredientId')
    .get(fridge.view)
    .put(fridge.update)
    .delete(fridge.delete);
};
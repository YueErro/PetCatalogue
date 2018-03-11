const pets = require('./pets/pets.service.js');
module.exports = function (app) {
  app.configure(pets);
};

// Initializes the `pets` service on path `/pets`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pets.model');
const hooks = require('./pets.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pets',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pets', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pets');

  service.hooks(hooks);
};

const ProjectmanagerController = require('../controllers/projectmanager.controller');


module.exports = function(app) {
  // get ALL projectmanager docs from Mongo
  app.get('/api/projectmanagers', ProjectmanagerController.getAll);
  // get one projectmanager document
  app.get('/api/projectmanagers/:id', ProjectmanagerController.getOne);
  // create a projectmanager document
  app.post('/api/projectmanagers', ProjectmanagerController.create);
  // update a projectmanager document
  app.put('/api/projectmanagers/:id', ProjectmanagerController.update);
  // delete a projectmanager document
  app.delete('/api/projectmanagers/:id', ProjectmanagerController.delete);
}
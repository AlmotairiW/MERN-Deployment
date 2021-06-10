
const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api', PetController.index);
    app.get('/api/pets', PetController.getAll);
    app.get('/api/pets/:id', PetController.getOne);
    app.post('/api/pets/new', PetController.create);
    app.put('/api/pets/update/:id', PetController.update);
    app.delete('/api/pets/delete/:id', PetController.delete);
};
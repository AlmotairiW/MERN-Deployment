const Pet = require('../models/pet.model');

module.exports = {

    index: (req, res) => {
        res.json("Welcome to Pet API");
    },

    getAll: (req, res) => {
        Pet.find()
        .then(allPets => res.json(allPets))
        .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Pet.findOne({_id: req.params.id})
        .then(pet => res.json(pet))
        .catch( err => res.status(400).json(err))
    },

    create: (req, res) => {
        Pet.create(req.body)
        .then( pet => res.json(pet))
        .catch(err => res.status(400).json(err));
    },

    update: (req, res) => {
        Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedPet => res.json(updatedPet))
        .catch( err => res.status(400).json(err))
    },
    
    delete: (req, res) => {
        Pet.deleteOne({ _id: req.params.id})
            .then(delConfirm => res.json(delConfirm))
            .catch( err => res.status(400).json(err))
    }
}

const express = require('express');
const router = express.Router();

const playerController =   require('../controllers/players.controller');

// Retrieve all 
router.get('/', playerController.findAll);

// Create a new 
router.post('/', playerController.create);

// Retrieve a single player with id
router.get('/:id', playerController.findById);

// Update a player with id
router.put('/:id', playerController.update);

// Delete a player with id
router.delete('/:id', playerController.delete);

module.exports = router;
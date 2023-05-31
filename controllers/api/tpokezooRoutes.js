const router = require('express').Router();
const { Pokehome, Animal } = require('../../models');
const withAuth = require('../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newZoo = await Pokehome.create({
            ...req.body
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
const router = require('express').Router();
const userRoutes = require('./user');
const ideaRoutes = require('./idea');

router.use('/users', userRoutes);
router.use('/ideas', ideaRoutes);

module.exports = router;
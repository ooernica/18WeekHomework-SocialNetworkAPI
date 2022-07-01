const router = require('express').Router();
const { createIdea,
    getAllIdeas,
    getIdeaById,
    addRetweetToIdeaById,
    deleteInteractionToIdeaById,
    updateIdeaById,
    deleteIdeaById
 } = require('../../../controllers/ideaController');

router.route('/')
    .post(createIdea)
    .get(getAllIdeas);

router.put('/:ideaId/interactions', addRetweetToIdeaById);
router.delete('/:ideaId/interactions/:interactId', deleteInteractionToIdeaById);

router.route('/:ideaId')
     .get(getIdeaById)
     .put(updateIdeaById)
     .delete(deleteIdeaById);

module.exports = router;
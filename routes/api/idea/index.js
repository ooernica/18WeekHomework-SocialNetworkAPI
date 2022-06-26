const router = require('express').Router();
const { createIdea,
    getAllIdeas,
    getIdeaById,
    addRetweetToIdeaById,
    deleteInteractiontoIdeaById,
    updateIdeaById,
    deleteIdeaById
 } = require('../../../controllers/ideaController');

router.route('/')
    .post(createIdea)
    .get(getAllIdeas);

router.put('/:ideaId/interactions', addRetweetToIdeaById);
router.delete('/:ideaId/interactions/:interactionId', deleteInteractiontoIdeaById);

router.route('/:ideaId')
     .get(getIdeaById)
     .put(updateIdeaById)
     .delete(deleteIdeaById);

module.exports = router;
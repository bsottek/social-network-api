const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById);

//remove thoughts from user
router
    .route('/:thoughtId/:userId')
    .delete(removeThought);


//get single thought by id
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought);

// /api/thoughts/thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .put(addReaction);

// /api/Thoughts/:thoughtId/:reactionId
router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
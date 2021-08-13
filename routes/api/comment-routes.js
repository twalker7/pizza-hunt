const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');


// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>  //2 parameters to address both the Pizza and the Comment
router.route('/:pizzaId/:commentId').delete(removeComment);


module.exports = router;
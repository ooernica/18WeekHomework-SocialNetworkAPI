const router = require('express').Router();
const { createUser,
        getAllUsers,
        getUserById,
        addFollowerToUserById,
        deleteFollowerToUserById,
        updateUserById,
        deleteUserById
     } = require('../../../controllers/userController');

router.route('/')
    .post(createUser)
    .get(getAllUsers);

router.put('/:userId/followers/:followerId', addFollowerToUserById);
router.delete('/:userId/followers/:followerId', deleteFollowerToUserById);

router.route('/:userId')
     .get(getUserById)
     .put(updateUserById)
     .delete(deleteUserById);

module.exports = router;
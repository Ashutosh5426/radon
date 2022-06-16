const express = require('express');
const userController = require('../controllers/userController');
const commonMw = require("../middlewares/auth");

const router = express.Router();

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", commonMw.authorize, userController.getUserData);

router.put("/users/:userId", commonMw.authorize, userController.updateUser)

router.delete("/users/:userId", commonMw.authorize, userController.deleteUser)


module.exports = router;
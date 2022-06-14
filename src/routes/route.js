const express = require('express');
const userController = require('../controllers/userController');
const commonMw = require("../middlewares/auth");

const router = express.Router();

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", commonMw.mid, userController.getUserData);

router.put("/users/:userId", commonMw.mid, userController.updateUser)

router.delete("/users/:userId", , userCocommonMw.midntroller.deleteUser)


module.exports = router;
const express = require('express');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');
const commonMw = require("../middlewares/commonMiddlewares")

const router = express.Router();

router.post("/createUser", commonMw.mid1, userController.createUser)
router.post('/createProduct', productController.createProduct);
router.post("/createOrder", commonMw.mid1, orderController.createOrder)


module.exports = router;
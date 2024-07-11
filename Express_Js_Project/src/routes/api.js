const express = require('express');
const router = express.Router();

const helloController = require("../controllers/helloController");

router.get("/product-find", helloController.allProductFind);
router.post("/product-create" , helloController.productCreate );

module.exports = router;



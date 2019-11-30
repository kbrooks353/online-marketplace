const router = require("express").Router();
const productsController = require("../../controllers/productController");

// Matches with "/api/products"
router
  .route("/")
  .get(productsController.findAll)
  .post(productsController.create);

module.exports = router;
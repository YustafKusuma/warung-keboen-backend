var express = require("express");
const { getOneProductById } = require("../services/product.service");
var router = express.Router();

router.get("/:productId", async (req, res) => {
  let productId = req?.params?.productId;
  let response = await getOneProductById(productId);
  res.json(response);
});

module.exports = router;
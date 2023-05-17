var express = require("express");
const {
  addToCart,
  removeFromCart,
  getCartItems,
} = require("../services/cart.service");
var router = express.Router();

router.get("/", async (req, res) => {
  let username = req?.username;
  let response = await getCartItems({ username });
  res.json(response);
});

router.post("/:productId", async (req, res) => {
  let { productId } = req?.params;
  let username = req?.username;
  let response = await addToCart({ productId, username });
  res.json(response);
});

router.delete("/:productId", async (req, res) => {
  let { productId } = req?.params;
  let username = req?.username;
  let response = await removeFromCart({ productId, username });
  res.json(response);
});

module.exports = router;
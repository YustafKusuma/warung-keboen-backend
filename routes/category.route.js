var express = require("express");

const {getAllCategory, getOneCategoryById} = require("../services/category.service");
var router = express.Router();

router.get("/", async (req, res) => {
  let response = await getAllCategory();
  res.json(response);
});

router.get("/:categoryId", async (req, res) => {
  let categoryId = req?.params?.categoryId;
  let response = await getOneCategoryById(categoryId);
  res.json(response);
});

module.exports = router;
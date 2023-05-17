var express = require("express");
const {
  addBookmark,
  removeBookmark,
  getBookmarks,
} = require("../services/bookmark.service");
var router = express.Router();

router.get("/", async (req, res) => {
  let username = req?.username;
  let response = await getBookmarks({ username });
  res.json(response);
});

router.post("/:categoryId", async (req, res) => {
  let { categoryId } = req?.params;
  let username = req?.username;
  let response = await addBookmark({ categoryId, username });
  res.json(response);
});

router.delete("/:categoryId", async (req, res) => {
  let { categoryId } = req?.params;
  let username = req?.username;
  let response = await removeBookmark({ categoryId, username });
  res.json(response);
});

module.exports = router;
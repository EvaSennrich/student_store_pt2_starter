const Store = require("../models/store");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const listProducts = await Store.listProducts(req.body);

    return res.status(200).json({ products: listProducts });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

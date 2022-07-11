const express = require("express");
const Order = require("../models/order");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const listOderForUser = await Order.listOderForUser(req.body);
    return res.status(200).json(listOderForUser);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const createOrder = await Order.createOrder(req.body);
    return res.status(200).json(createOrder);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

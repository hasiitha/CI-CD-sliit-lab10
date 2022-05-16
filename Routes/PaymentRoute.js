const express = require("express");
const router = express.Router();

const {
  getPaymentsForCard,
  postdoPayment,
  getAllPayments,
} = require("../Controllers/PaymentController");

//@route  Get api/getAllPayments
//@desc   Get all payments
//@access Public
router.get("/", getAllPayments);

//@route  POST api/postdoPayment
//@desc   Add payslips
//@access Public
router.post("/", postdoPayment);

//@route  Get api/getPaymentsForCard
//@desc   get payments from a card
//@access Public

router.get("/:id", getPaymentsForCard);

module.exports = router;

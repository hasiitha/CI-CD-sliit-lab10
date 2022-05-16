const express = require("express");
const router = express.Router();
const { postAddCreditCard } = require("../Controllers/CreditCardController");

//@route  POST api/creditcards
//@desc   Add card details
//@access Public
router.post("/", postAddCreditCard);

module.exports = router;

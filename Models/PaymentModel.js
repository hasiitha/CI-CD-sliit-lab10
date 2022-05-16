const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentDetails = new Schema({
  name: {
    type: String,
  },
  amount: {
    type: String,
  },
  expireDate: {
    type: String,
  },
  cardNumber: {
    type: String,
  },
  cVVNumber: {
    type: String,
  },
});

const PaymentDetailsModel = mongoose.model("PaymentDetails", PaymentDetails);
module.exports = PaymentDetailsModel;

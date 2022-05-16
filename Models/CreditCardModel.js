const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardDetails = new Schema({
  balance: {
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

const CardDetailModel = mongoose.model("CardDetail", CardDetails);
module.exports = CardDetailModel;

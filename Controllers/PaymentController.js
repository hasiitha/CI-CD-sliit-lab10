const PaymentDetailsModel = require("../Models/PaymentModel");

const postdoPayment = async (req, res) => {
  const { name, amount, expireDate, cardNumber, cVVNumber } = req.body;

  try {
    const payDetail = new PaymentDetailsModel({
      name,
      amount,
      expireDate,
      cardNumber,
      cVVNumber,
    });
    await payDetail
      .save()
      .then(async (result) => {
        res.status(200).json(result);
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getAllPayments = async (req, res) => {
  try {
    await PaymentDetailsModel.find().then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};

const getPaymentsForCard = async (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  try {
    await PaymentDetailsModel.find({ cardNumber: cardNumber })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json("Error: " + error);
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { getPaymentsForCard, postdoPayment, getAllPayments };

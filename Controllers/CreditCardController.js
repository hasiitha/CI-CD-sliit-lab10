const CreditCardModel = require("../Models/CreditCardModel");

const postAddCreditCard = async (req, res) => {
  const { balance, expireDate, cardNumber, cVVNumber } = req.body;

  try {
    const cardDetail = new CreditCardModel({
      balance,
      expireDate,
      cardNumber,
      cVVNumber,
    });
    await cardDetail
      .save()
      .then(async (result) => {
        res.status(200).json(result);
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { postAddCreditCard };

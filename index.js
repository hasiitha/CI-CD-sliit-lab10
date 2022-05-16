const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

const PORT = process.env.PORT || 5000;
const url =
  "mongodb+srv://afassignment:afAssignment123@assignmentcluster.nk6a6.mongodb.net/Shopping_App_Payment?retryWrites=true&w=majority";

try {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
} catch (error) {
  console.log(error.message);

  //Exit Process with failure
  process.exit(1);
}

app.use("/payment", require("./Routes/PaymentRoute"));
app.use("/card", require("./Routes/CreditCardRoute"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

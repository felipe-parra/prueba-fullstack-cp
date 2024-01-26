const dotenv = require("dotenv");

dotenv.config();

const config = {
  port: process.env.PORT,
  paypalClientId: process.env.PAYPAL_CLIENT_ID,
  paypalSecretKey: process.env.PAYPAL_SECRET_KEY,
};

module.exports = config;

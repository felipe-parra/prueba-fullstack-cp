const paypal = require("paypal-rest-sdk");
const config = require("../config/index");

paypal.configure({
  client_id: config.paypalClientId,
  client_secret: config.paypalSecretKey,
});

module.exports = paypal;

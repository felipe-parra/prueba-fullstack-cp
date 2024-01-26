const paypal = require("../utils/paypal");

module.exports = {
  createPaypalPaymentController,
};

async function createPaypalPaymentController(redirect_urls, transactions) {
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls,
    transactions,
  };

  try {
    const payment = await createPaypalPayment(create_payment_json);

    const approvalUrl = getApprovalUrl(payment);

    return approvalUrl;
  } catch (error) {
    console.error({ error });
    return null;
  }
}

async function createPaypalPayment(create_payment_json) {
  return new Promise((resolve, reject) => {
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        reject(error);
      } else {
        resolve(payment);
      }
    });
  });
}

function getApprovalUrl(payment) {
  const approvalUrl = payment.links
    .filter((link) => link.rel === "approval_url")
    .map((link) => link.href)
    .shift();

  if (!approvalUrl) {
    throw new Error("Don't founded approval url");
  }

  return approvalUrl;
}

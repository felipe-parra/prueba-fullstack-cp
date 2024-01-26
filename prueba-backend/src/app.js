const express = require("express");
const {
  createPaypalPaymentController,
} = require("./controller/payment.controller");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares

// Routes
app.post("/", async (req, res) => {
  const redirect_urls = {
    return_url: "http://localhost:3000/cb",
    cancel_url: "http://localhost:3000/cancel",
  };

  const approvalUrl = await createPaypalPaymentController(
    redirect_urls,
    req.body.transactions
  );

  res.status(200).json({
    data: approvalUrl,
  });
});

app.listen(3000, () => {
  console.log("Server runnning on port 3000");
});

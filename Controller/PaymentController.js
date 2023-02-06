const Razorpay = require("razorpay");
const KEY_ID = "rzp_test_RB0WE1nRLezVJ5";
const SECRET_ID = "VLMCIrqKxRMNR9EcRcbL2UG8";
var instance = new Razorpay({
  key_id: KEY_ID,
  key_secret: SECRET_ID,
});

module.exports.genOrderId = (request, response) => {
  let { amount } = request.body;
  var options = {
    amount: amount * 100,
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      response.status(500).send({ status: false, order });
    } else {
      response.status(200).send({ status: true, order });
    }
  });
};

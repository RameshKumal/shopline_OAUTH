const crypto = require("crypto");
require("dotenv").config();

const calculatedHmac = (data) => {
  const message = Object.keys(data)
    .filter((key) => key !== "sign")
    .map((key) => `${key}=${data[key]}`)
    .sort()
    .join("&");

  const calculated_hmac = crypto
    .createHmac("sha256", process.env.appSecret)
    .update(message)
    .digest("hex");

    console.log(calculatedHmac);
  return calculated_hmac;
};

module.exports = {
  calculatedHmac,
};

const { installUrl } = require("../helper/installUrl");
const { calculatedHmac } = require("../helper/calculateHmac");
const { accessToken } = require("../helper/accessToken");
const axios = require("axios");

const authorization = async (req, res) => {
  try {
    const url = await installUrl(req.query.handle);
    return res.redirect(url);
  } catch (err) {
    console.log(err);
  }
};

const installApp = async (req, res) => {
  try {
    const code = req.query.code;
    const handle = req.query.handle;
    const appKey = req.query.appkey;
    const sign = req.query.sign;
    const timestamp = req.query.timestamp;
    const calculatedSign =  calculatedHmac(req.query);
    console.log(req.query);
    const accessTokenRequestUrl = `https://${handle}.myshopline.com/admin/oauth/token/create`;
    const data = await axios.post(
      accessTokenRequestUrl,
      {
        code: `${code}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          appkey: `${appKey}`,
          sign: `${sign}`,
          timestamp: `${timestamp}`,
        },
      }
    );
     console.log(data, "sss");
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  authorization,
  installApp,
};

require("dotenv").config();
const axios = require("axios");
const appKey = process.env.appKey;
const redirect_uri = process.env.redirect_uri;
const scope = process.env.scope;

const accessToken = async (code, handle, sign, timestamp) => {
  try {
    if (code && handle) {
      const accessTokenRequestUrl = `https://${handle}.myshopline.com/admin/oauth/token/create`;
      const data = await axios.post(
        accessTokenRequestUrl,
        {
          body: `${code}`,
        },
        {
          headers: {
            appKey: `${appKey}`,
            sign: sign,
            timestamp: timestamp,
          },
        }
      );
      console.log(data);
      return data;
    } else {
      console.error("code or shop is undefined.");
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  accessToken,
};

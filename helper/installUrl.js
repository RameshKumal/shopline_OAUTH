require("dotenv").config();
const appkey = process.env.appKey;
const scope = process.env.scope;
const redirect_uri = process.env.redirect_uri

const installUrl = (handle) => {
  try {
    if (handle) {
      return encodeURI(
        `https://${handle}.myshopline.com/admin/oauth-web/#/oauth/authorize?appKey=${appkey}&scope=${scope}&redirectUri=${redirect_uri}`
      );
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  installUrl,
};

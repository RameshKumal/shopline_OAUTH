const { installUrl } = require("../helper/installUrl");
const {calculatedHmac} = require("../helper/calculateHmac");
const {accessToken} = require("../helper/accessToken");

const authorization = async(req, res) => {
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
        const sign = req.query.sign;
        const timestamp = req.query.timestamp;
        const calculatedSign = calculatedHmac(req.query);
        if(sign === calculatedSign){
            let token = await accessToken(code, handle, calculatedSign, timestamp);
            console.log(token);
        }
    } catch (err) {
      console.log(err);
    }
  };
module.exports = {
  authorization,installApp
};

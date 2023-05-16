const { installUrl } = require("../helper/installUrl");

const authorization = async (req, res) => {
  try {
    const url = await installUrl(req.query.handle);
    return res.redirect(url);
    console.log(url);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  authorization,
};

const express = require("express");
const app = express();
const router = express.Router();
const { authorization, installApp} = require("../controllers/authorization_controller");
// const {verifySessionToken} = require("../middleware/auth.middleware")
// const { createCustomer, getCustomer, updateCustomer, deleteCustomer } = require("../controllers/customer");

// @api/shopline/
let routes = (app) => {
  router.get("/authorize", authorization);
  router.get("/redirect", installApp);

  /*base routes */
  app.use("/api/shopline", router);
};

module.exports = routes;

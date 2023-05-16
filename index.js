const express = require("express");
const app = express();
require("./db/index");
require("dotenv").config();
const port = process.env.port;
/*body parser */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*routes */
// require("./routes/auth")(app);
// require("./routes/customer")(app);
// require("./routes/product")(app);
// require("./routes/order")(app);
// require("./routes/fullfillment")(app);


// initRoutes(app);
// customerRoutes(app);
// productRoutes(app);
// orderRoutes(app);

app.listen(port, () => {
  console.log(`app listening at port: ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = express();

// Database import
const sequelize = require("./util/db.js");

// Routes import
const contactRoutes = require("./routes/contact.js");

app.use(bodyParser.json());
app.use(contactRoutes);

const port = 3000;

sequelize
  //   .sync({ force: true })
  .sync()
  .then(() => {
    console.log("DB Connected");
    app.listen(port, () => {
      console.log(`server is listening at port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err, "error in connecting to database");
  });

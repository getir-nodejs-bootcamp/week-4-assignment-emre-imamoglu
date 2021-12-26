const express = require("express");
const app = express();

const contactsRoutes = require("./routes/contacts");

const connectDB = require("./loaders/mongo");
const config = require("./config/config");

config();
connectDB();

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on port ${process.env.APP_PORT}`);

  app.use("/contacts", contactsRoutes);
});

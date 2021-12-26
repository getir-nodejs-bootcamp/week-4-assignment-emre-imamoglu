const Mongoose = require("mongoose");

const ContactSchema = new Mongoose.Schema(
  {
    name: String,
    surname: String,
    email: String,
    phone: String,
    birthdate: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = Mongoose.model("contact", ContactSchema);

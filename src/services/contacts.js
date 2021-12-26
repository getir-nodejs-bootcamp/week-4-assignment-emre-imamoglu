const Contact = require("../models/Contact");

const indexContacts = () => {
  return Contact.find({});
};

const getContactByPhone = (phone) => {
  return Contact.findOne({ phone });
};

const createContact = (data) => {
  const contact = new Contact(data);
  return contact.save();
};

const updateContact = (phone, data) => {
  return Contact.findOneAndUpdate({ phone }, data);
};

const deleteContact = (phone) => {
  return Contact.findOneAndDelete({ phone });
};

module.exports = {
  indexContacts,
  getContactByPhone,
  createContact,
  updateContact,
  deleteContact,
};

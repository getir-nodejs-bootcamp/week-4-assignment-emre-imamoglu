const contactService = require("../services/contacts");
const hs = require("http-status");

//Lists All the Contacts
const indexContacts = (req, res) => {
  contactService
    .getAllContacts()
    .then((contacts) => {
      if (!contacts) {
        res.status(hs.NOT_FOUND).send({
          message: "No contacts found!",
        });
      } else {
        res.status(hs.OK).send(contacts);
      }
    })
    .catch((err) => {
      res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    });
};

// List single contact by phone
const getContactByPhone = (req, res) => {
  const phone = req.body.phone;

  contactService
    .getContactByPhone(phone)
    .then((contact) => {
      if (!contact) {
        res.status(hs.NOT_FOUND).send({
          message: "Contact not found!",
        });
      } else {
        res.status(hs.OK).send(contact);
      }
    })
    .catch((err) => {
      res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    });
};

//Creates a Contact
const createContact = (req, res) => {
  const contact = req.body;

  contactService
    .createContact(contact)
    .then((contact) => {
      if (!contact) {
        res.status(hs.NOT_FOUND).send({
          message: "Can not create contact for some reason!",
        });
      } else {
        res.status(hs.OK).send(contact);
      }
    })
    .catch((err) => {
      res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    });
};

//Updates a contact
const updateContact = (req, res) => {
  const contact = req.body;

  contactService
    .updateContact(contact)
    .then((contact) => {
      if (!contact) {
        res.status(hs.NOT_FOUND).send({
          message: "Can not update contact for some reason!",
        });
      } else {
        res.status(hs.OK).send(contact);
      }
    })
    .catch((err) => {
      res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    });
};

//Deletes a contact
const deleteContact = (req, res) => {
  const phone = req.body.phone;

  contactService
    .deleteContact(phone)
    .then((contact) => {
      if (!contact) {
        res.status(hs.NOT_FOUND).send({
          message: "Contact not found!",
        });
      } else {
        res.status(hs.OK).send(contact);
      }
    })
    .catch((err) => {
      res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    });
};

module.exports = {
  indexContacts,
  getContactByPhone,
  createContact,
  updateContact,
  deleteContact,
};

const express = require("express");
const contactsController = require("../controllers/contacts");

const router = express.Router();

router.route("/").get(contactsController.indexContacts);
router.route("/").post(contactsController.createContact);
router.get("/:id", contactsController.getContactByPhone);
router.patch("/:id", contactsController.updateContact);
router.delete("/:id", contactsController.deleteContact);

module.exports = router;

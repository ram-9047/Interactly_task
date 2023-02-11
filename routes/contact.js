const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.js");

// Create a new contact
router.post("/createContact", contactController.createContact);

// Get a contact
router.get("/getContact/:contactID", contactController.viewContact);

// Update a contact
router.post("/updateContact/:contactID", contactController.updateContact);

// Delete a contact
router.post("/deleteContact/:contactID", contactController.deleteContact);

module.exports = router;

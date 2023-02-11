const e = require("express");
const Contact = require("../models/contact.js");

exports.createContact = async (req, res) => {
  try {
    let first_name = req.body.firstName;
    let last_name = req.body.lastName;
    let email = req.body.email;
    let mobile_number = req.body.phoneNumber;

    let contact = await Contact.create({
      first_name,
      last_name,
      email,
      mobile_number,
    });
    res.status(200).json({ contact, message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Failed" });
  }
};

exports.viewContact = async (req, res) => {
  try {
    const contactID = req.params.contactID;
    let contact = await Contact.findByPk(contactID);
    if (!contact) {
      res.status(404).json({ message: "Contact Not Found" });
    } else {
      res.status(200).json(contact);
    }
  } catch (error) {
    res.status(404).json({ message: "Contact Not Found" });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contactID = req.params.contactID;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;

    // Find the contact
    let contact = await Contact.findByPk(contactID);

    if (!contact) {
      res.status(400).json({ message: "user not found" });
    } else {
      //update the values
      if (email) contact.email = email;
      if (phoneNumber) contact.mobile_number = phoneNumber;

      // save the contac
      await contact.save();

      res.status(200).json(contact);
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteContact = async (req, res) => {
  const contactID = req.params.contactID;
  let contact = await Contact.findByPk(contactID);
  let x = await contact.destroy();
  if (x.id == contactID) {
    res.status(200).json({ message: "Contact Deleted" });
  }
};

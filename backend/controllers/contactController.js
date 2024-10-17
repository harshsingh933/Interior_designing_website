const Contact = require('../models/contactModel');

// @desc    Create a new contact entry
// @route   POST /api/contact
// @access  Public
const createContact = async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }

  try {
    const newContact = new Contact({
      name,
      phone,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact information saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error, please try again later' });
  }
};

module.exports = { createContact };

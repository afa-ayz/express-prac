const Contact = require('../models/contactModel');
const asyncHandler = require('express-async-handler');
//@desc Get all contacts
//@route GET /api/contacts
//@access Private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});
//@desc Get one contact
//@route GET /api/contacts/:id
//@access Private
const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id);
    if (!contacts) {
        throw new Error('Contact not found');
    }

    res.status(200).json(contacts);
});
//@desc Create new contacts
//@route POST /api/contacts
//@access Private
const createContact = asyncHandler(async (req, res) => {
    console.log('the req.body is: ', req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        throw new Error('All field are mandatory');
    }
    const contacts = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contacts);
});
//@desc Update
//@route PUT /api/contact:id
//@access Private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        throw new Error('Contact not found');
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedContact);
});
//@desc Delete
//@route DELETE /api/contacts/:id
//@access Private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
        throw new Error('Contact not found');
    }
    res.status(200).json(contact);
});

module.exports = { getContact, getContacts, createContact, updateContact, deleteContact };

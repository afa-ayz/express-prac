//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
    res.status(200).json({ message: 'Get all contacts' });
};
//@desc Get one contact
//@route GET /api/contacts/:id
//@access Public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
};
//@desc Create new contacts
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
    res.status(201).json({ message: 'Create New Contact' });
};
//@desc Update
//@route POST /api/contact:id
//@access Public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}` });
};
//@desc Delete
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
    res.status(200).json({ message: 'Delete Message' });
};

module.exports = { getContact, getContacts, createContact, updateContact, deleteContact };

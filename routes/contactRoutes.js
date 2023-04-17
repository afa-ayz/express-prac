const express = require('express');
const router = express.Router();
const { getContact, getContacts, createContact, updateContact, deleteContact } = require('../controllers/contactController');

// get all contacts
router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

// // create new contact
// router.route('/').post((req, res) => {
//     res.status(200).json({ message: 'Create new contact' });
// });

// // get specific contact
// router.route('/:id').get((req, res) => {
//     res.status(200).json({ message: `Get contact for ${req.params.id}` });
// });
// // update contact
// router.route('/:id').post((req, res) => {
//     res.status(200).json({ message: `Update contact ${req.params.id}` });
// });

// // delete contact
// router.route('/:id').delete((req, res) => {
//     res.status(200).json({ message: 'Delete Message' });
// });

module.exports = router;

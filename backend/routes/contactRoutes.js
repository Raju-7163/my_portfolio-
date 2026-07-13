const express = require("express");

const router = express.Router();

const {
    createContact,
    getContacts,
    deleteContact
} = require("../controllers/contactController");
// POST /api/contact
router
.route("/")
.post(createContact)
.get(getContacts);

router
.route("/:id")
.delete(deleteContact);

module.exports = router;
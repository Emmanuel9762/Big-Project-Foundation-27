// server/routes/donations.js
const express = require('express');
const { createOneTimeDonation, createRecurringDonation } = require('../controllers/donationsController');
const router = express.Router();

router.post('/once', createOneTimeDonation);
router.post('/recurring', createRecurringDonation);

module.exports = router;

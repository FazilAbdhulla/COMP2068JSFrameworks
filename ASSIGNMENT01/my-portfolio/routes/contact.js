const express = require('express');
const router = express.Router();

// Route handler for "/contact"
router.get('/', (req, res) => {
    res.render('contact'); // Render the contact view
});

module.exports = router;

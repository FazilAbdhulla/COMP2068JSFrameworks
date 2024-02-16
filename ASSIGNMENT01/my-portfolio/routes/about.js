const express = require('express');
const router = express.Router();

// Route handler for "/about"
router.get('/', (req, res) => {
    res.render('about'); // Render the about view
});

module.exports = router;

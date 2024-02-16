const express = require('express');
const router = express.Router();

// Route handler for "/project"
router.get('/', (req, res) => {
    res.render('project'); // Render the project view
});

module.exports = router;

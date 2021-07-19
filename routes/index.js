const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('landingpage.hbs');
});

router.get('/home', (req, res) => {
    res.render('landingpage.hbs');
});

router.get('/about', (req, res) => {
    res.render('about.hbs');
});

module.exports = router
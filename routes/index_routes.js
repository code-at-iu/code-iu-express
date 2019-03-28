const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        css: '/css/index.css'
    });
});


router.get('/about', (req, res) => {
    res.render('about', {
        css: '/css/about.css'
    });
});

router.get('/programs', (req, res) => {
    res.render('programs', {
        css: '/css/programs.css'
    });
});



module.exports = router;
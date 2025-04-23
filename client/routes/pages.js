
const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const languageMiddleware = require('../middlewares/language');

router.use(languageMiddleware);

// Main pages
router.get('/', pageController.renderPage('index'));
router.get('/sell', pageController.renderPage('sell'));
router.get('/history', pageController.renderPage('history'));
router.get('/about', pageController.renderPage('about'));
router.get('/referral', pageController.renderPage('referral'));

// Language switcher
router.post('/set-language', (req, res) => {
    const { language } = req.body;
    if (['en', 'ru'].includes(language)) {
        res.cookie('lang', language, { maxAge: 900000, httpOnly: true });
        req.language = language;
    }
    res.redirect('back');
});

module.exports = router;

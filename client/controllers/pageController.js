
const path = require('path');
const { getTranslations } = require('../config/i18n');

exports.renderPage = (pageName) => {
    return (req, res) => {
        // Inject translations into the page
        const translations = getTranslations(req.language);
        
        res.render(pageName, {
            translations,
            currentLanguage: req.language,
            user: req.user // If authenticated
        });
    };
};

exports.handle404 = (req, res) => {
    res.status(404).render('errors/404', {
        translations: getTranslations(req.language),
        currentLanguage: req.language
    });
};

exports.handle500 = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('errors/500', {
        translations: getTranslations(req.language),
        currentLanguage: req.language
    });
};

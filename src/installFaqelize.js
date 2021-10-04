let fc = require('../faqelize.config.js')

export default {
    install: (app, options) => {
        app.config.globalProperties.$faqelize = fc;
    }
}
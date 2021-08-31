import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from "../node_modules/vue-i18n/dist/vue-i18n.esm-browser";

import 'bootstrap-icons/font/bootstrap-icons.css';

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: require('./i18n/en'),
        ru: require('./i18n/ru')
    },
})

let app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app');
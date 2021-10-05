import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from "../node_modules/vue-i18n/dist/vue-i18n.esm-browser";

import 'bootstrap-icons/font/bootstrap-icons.css';
import './registerServiceWorker'

let app = createApp(App)

import ifc from './installFaqelize';
app.use(ifc);

document.title = ifc.config.title;

let i18nMessages = {};
for (let lang of ifc.config.languages) {
    i18nMessages[lang.code] = require(`./i18n/${lang.code}`)
}

const i18n = createI18n({
    locale: ifc.config.defaultLanguage,
    messages: i18nMessages
})

const requireComponent = require.context(
    './pages',
    false,
    /[A-Z]\w+\.(vue|js)$/
);

for (let component of requireComponent.keys()) {
    let componentName = component.split('/').pop().split('.')[0];
    app.component(componentName, requireComponent(component).default);
}

app.use(router)
app.use(i18n)
app.mount('#app');
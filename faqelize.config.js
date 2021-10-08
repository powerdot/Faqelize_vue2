module.exports = {
    // App title
    title: "Faqelize",

    // Database location:
    // 'local'
    // or any link 'https://my.s3.storage.io/bucket/secret_database.json'
    database: 'local',

    languages: [
        { code: 'ru', name: 'Русский' },
        { code: 'en', name: 'English' },
    ],

    // Default language. Preinstalled languages: en (English), ru (Russian)
    defaultLanguage: 'ru',

    // Display language switcher.
    showLanguageSwitcher: true,

    // Enable pins.
    usePins: true,

    // Autosave password hash in localstorage.
    savePassword: true,

    // Encrypt database.json with password while building.
    encryptDatabase: true,

    // Suggest install as app on mobile devices.
    installAsPWA: true,

    // Disable logout if page works as PWA on smartphone.
    disableLogoutOnStandalone: true,

    // Set logotype image.
    // Can be bool and string.
    // If string is empty - default logo from ./public/img/logo.png
    // If string is not empty - image from string (URL or base64)
    // If bool is true - default logo from ./public/img/logo.png
    // If bool is false - no logo
    logo: '',

    // Public path for production.
    productionPublicPath: '/Faqelize/',

    // Accept login by &password URL parameter.
    // ! Can be unsecure.
    // But if you use it, better send sha256 password hash instead of raw password.
    acceptPasswordParameter: true,

    // Determines URL parameter for password.
    passwordParameterKey: 'password',

    // Clear password parameter from URL after login.
    clearPasswordParameter: true,

    // Accept logo by &logo URL parameter.
    acceptLogoParameter: true,

    // Determines URL parameter for logo.
    logoParameterKey: 'logo',

    // Accept use database by URL parameter.
    acceptDatabaseParameter: true,

    // Determines URL parameter for database.
    databaseParameterKey: 'db',

    // Display or hide icon of "page" type of answer.
    displayPageIcon: true,

    // Animate opening for answer page.
    answerPageOpeningAnimation: false,
};
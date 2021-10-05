module.exports = {
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

    // Autosave password in localstorage.
    savePassword: true,

    // Encrypt database.json with password while building.
    encodeDatabase: true,

    // Suggest install as app on mobile devices.
    installAsPWA: true,

    logo: '',
};
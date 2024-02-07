export default {
  // Indicates you are not using the legacy option (for Vue I18n in Nuxt 2)
  legacy: false,

  // Specifies the locales available for your project
  locale: 'en',

  // Sets the default locale used when no other locale matches
  defaultLocale: 'en',

  // Sets the locale used when the requested locale cannot be found
  fallbackLocale: 'en',

  // Configuration for detecting the browser's language
  detectBrowserLanguage: {

    // Enables the use of a cookie to remember the language selected by the user
    useCookie: true,

    // The key used for the cookie
    cookieKey: 'i18n_redirected',

    // Automatically redirects to the browser's language, if available
    alwaysRedirect: true,

    // The locale to use if the browser's language is not available in your locales list
    fallbackLocale: 'en'
  }
};

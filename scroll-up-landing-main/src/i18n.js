// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

// Initialize i18next
i18n
  .use(HttpBackend) // Load translations from a backend or files
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    fallbackLng: "en", // Default language
    debug: true, // Enable debug messages in the console
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
  });

export default i18n;

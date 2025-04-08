import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'; // Nuevo

i18n
    .use(Backend) // Nuevo
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        backend: { // Configuración para cargar los JSONs
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        }
    });

export default i18n;
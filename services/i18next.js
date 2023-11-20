import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import en from "../locales/en/en.json";
import tr from "../locales/tr/tr.json";

export const languageResources = {
    en: {translation: en},
    tr: {translation: tr},
}

i18next.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: 'tr',
    fallbackLng: 'en',
    resources: languageResources,
    interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
});

export default i18next;

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import ens from "../public/locales/en/translation.json";
import rus from "../public/locales/ru/translation.json";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    defaultNS: "ns1",
    debug: false,
    detection: ["queryString", "cookie"],
    cache: "cookie",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        ns1: ens,
      },
      ru: {
        ns1: rus,
      },
    },
  });

export default i18next;

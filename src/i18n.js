import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// EN FILES
import enHome from "./locales/en/home/translation.json";
import enHeader from "./locales/en/header/translation.json";
import enFooter from "./locales/en/footer/translation.json";
import enAboutPage from "./locales/en/aboutPage/translation.json";
import enAirFreight from "./locales/en/Freight-Forwarding/enAirFreight.json";
// AR FILES
import arHome from "./locales/ar/home/translation.json";
import arHeader from "./locales/ar/header/translation.json";
import arFooter from "./locales/ar/footer/translation.json";
import arAboutPage from "./locales/ar/aboutPage/translation.json";
import arAirFreight from "./locales/ar/Freight-Forwarding/arAirFreight.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: enHome,
        header: enHeader,
        footer: enFooter,
        aboutPage: enAboutPage,
        airFreight: enAirFreight,
      },
      ar: {
        home: arHome,
        header: arHeader,
        footer: arFooter,
        aboutPage: arAboutPage,
        airFreight: arAirFreight,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

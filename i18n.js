import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import copyEN from './copy/en.js'
import copyDE from './copy/de.js'

const resources = {
  en: copyEN,
  de: copyDE,
}

const detector = new LanguageDetector()
detector.init({
  order: ['path'],
  lookupFromPathIndex: 0,
})

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    bindI18n: 'loaded languageChanged', // important!
    bindI18nStore: 'added',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: true,
  },
  detection: {
    order: ['path'],
    lookupFromPathIndex: 0,
  },
})
export default i18n

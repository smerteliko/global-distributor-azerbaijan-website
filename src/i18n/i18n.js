/*
 * Global Distributor Azerbaijan Website
 *
 * Developed by Nikolai Makarov (smerteliko@gmail.com)
 * All rights reserved.
 */
import { createI18n } from 'vue-i18n';

import enMessages from './locales/en.json';
import azMessages from './locales/az.json';
import zhMessages from './locales/zh.json';
import frMessages from './locales/fr.json';

const messages = {
  en: enMessages,
  az: azMessages,
  zh: zhMessages,
  fr: frMessages,
};
let locale = localStorage.getItem('user-language');

if (!locale) {
  const browserLanguage = navigator.language.split('-')[0];
  if (Object.keys(messages).includes(browserLanguage)) {
    locale = browserLanguage;
  }
}

if (!locale) {
  locale = 'en';
}
const i18n = createI18n({
  legacy: true,
  locale: locale,
  messages,
});

export default i18n;

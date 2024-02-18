import enNs1 from '../public/locales/en/translation.json';
import enNs2 from '../public/locales/ru/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: {
      ns1: typeof enNs1;
      ns2: typeof enNs2;
    };
  }
}
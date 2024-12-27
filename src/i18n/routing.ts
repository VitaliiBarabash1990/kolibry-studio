import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'ua', 'pl'],
  defaultLocale: 'pl',
  pathnames: {
    '/': '/',
    '/services': {
      en: '/services',
      de: '/dienstleistungen',
      ua: '/послуги',
      pl: '/usługi'
    },
    '/gallery': {
      en: '/gallery',
      de: '/galerie',
      ua: '/галерея',
      pl: '/galeria'
    },
    '/courses': {
      en: '/courses',
      de: '/kurse',
      ua: '/курси',
      pl: '/kursy'
    },
    '/contacts': {
      en: '/contacts',
      de: '/kontakte',
      ua: '/контакти',
      pl: '/łączność'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);

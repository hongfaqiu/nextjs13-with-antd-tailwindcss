import createIntlMiddleware from 'next-intl/middleware';

import { defaultLocale, languages } from './i18n';

export default createIntlMiddleware({
	// A list of all locales that are supported
	locales: Object.keys(languages),

	// If this locale is matched, pathnames work without a prefix (e.g. `/about`)
	defaultLocale,
});

export const config = {
	// Skip all paths that aren't pages that you'd like to internationalize
	matcher: ['/((?!api|_next|favicon.ico|assets).*)'],
};

import { SiteHeader } from '#/components/SiteHeader';
import '#/styles/globals.css';

import 'antd/dist/reset.css';

import Providers from './Provider';
import Head from './head';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="zh">
			<Head />
			<body>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
					<SiteHeader />
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}

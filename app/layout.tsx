'use client';

import { ThemeProvider } from 'next-themes';

import { SiteHeader } from '#/components/SiteHeader';
import AntdConfigProvider from '#/components/antd/AntdConfigProvider';
import '#/styles/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="zh">
			<head />
			<title>Using Ant-Design 5 with Next.js 13 and Tailwind CSS</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta
				name="description"
				content="Using Ant-Design 5 with Next.js 13 and Tailwind CSS"
			/>
			<link rel="icon" href="/favicon.ico" />
			<body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
					<AntdConfigProvider>
						<SiteHeader />
						<main>{children}</main>
					</AntdConfigProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

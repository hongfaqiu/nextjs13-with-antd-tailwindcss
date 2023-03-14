'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';

import { ConfigProvider, theme } from 'antd';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';

import { defaultLocale, languages } from '@/i18n';

export type ProviderProps = PropsWithChildren<{
	locale: string;
}>;

// suppress useLayoutEffect warnings when running outside a browser
if (!process.browser) React.useLayoutEffect = React.useEffect;

export function AntdConfigProvider({ children, locale }: ProviderProps) {
	const { theme: nowTheme } = useTheme();

	return (
		<ConfigProvider
			locale={(languages as any)[(locale as any) ?? defaultLocale].antd}
			theme={{
				algorithm:
					nowTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
			}}
		>
			{children}
		</ConfigProvider>
	);
}

export default function Providers(props: ProviderProps) {
	const [mounted, setMounted] = useState(false);

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

  if (!mounted) {
    // or your loading component
		return null;
	}

	return (
		<NextThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<AntdConfigProvider {...props} />
		</NextThemeProvider>
	);
}

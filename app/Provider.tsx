'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import { AntdProvider } from '@antd/AntdProvider';
import zhCN from 'antd/locale/zh_CN';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

import { ConfigProvider, theme } from '#/components/antd';

export function AntdConfigProvider({ children }: PropsWithChildren) {
  const { theme: nowTheme, setTheme } = useTheme();

	return (
		<ConfigProvider
			locale={zhCN}
			theme={{
				algorithm:
					nowTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
			}}
		>
			<AntdProvider>{children}</AntdProvider>
		</ConfigProvider>
	);
}

export default function Providers({
	children,
	...props
}: PropsWithChildren<ThemeProviderProps>) {
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    localStorage.removeItem('theme')
    setMounted(true)
  }, [])

  if (!mounted) {
    return <AntdConfigProvider>{children}</AntdConfigProvider>
  }

  return (
		<NextThemeProvider {...props}>
			<AntdConfigProvider>{children}</AntdConfigProvider>
		</NextThemeProvider>
	);
}

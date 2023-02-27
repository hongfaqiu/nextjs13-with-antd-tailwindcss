import { PropsWithChildren } from 'react';

import { AntdProvider } from '@antd/AntdProvider';
import zhCN from 'antd/locale/zh_CN';
import { useTheme } from 'next-themes';

import { ConfigProvider, theme } from '#/components/antd';

export default function AntdConfigProvider({ children }: PropsWithChildren) {
	const { theme: nowTheme } = useTheme();

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

import { ConfigProvider } from '@antd';
import zhCN from 'antd/locale/zh_CN';

import { AntdProvider } from '#/UI/AntdProvider';
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
				<ConfigProvider locale={zhCN}>
					<AntdProvider>{children}</AntdProvider>
				</ConfigProvider>
			</body>
		</html>
	);
}

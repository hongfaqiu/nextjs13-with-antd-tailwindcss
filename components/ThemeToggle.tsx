import React from 'react';

import { Dropdown, MenuProps } from '@antd';
import { useTheme } from 'next-themes';

import Icons from './Icons';

export default function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	const onClick: MenuProps['onClick'] = ({ key }) => {
		setTheme(key);
	};

	const items: MenuProps['items'] = [
		{
			key: 'light',
			label: (
				<div className="flex items-center">
					<Icons.SunMedium className="mr-2 h-4 w-4" />
					<span>亮色</span>
				</div>
			),
		},
		{
			key: 'dark',
			label: (
				<div className="flex items-center">
					<Icons.Moon className="mr-2 h-4 w-4" />
					<span>暗色</span>
				</div>
			),
		},
		{
			key: 'system',
			label: (
				<div className="flex items-center">
					<Icons.Laptop className="mr-2 h-4 w-4" />
					<span>系统</span>
				</div>
			),
		},
	];

	return (
		<Dropdown
			menu={{
				items,
				selectable: true,
				selectedKeys: [theme ?? 'system'],
				onClick,
			}}
		>
			<button className="btn">
				<Icons.SunMedium className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
				<Icons.Moon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
			</button>
		</Dropdown>
	);
}

import React from 'react';

import { Button, Dropdown, MenuProps } from '@antd';
import { useTheme } from 'next-themes';

import IconDesktop from './icons/IconDesktop';
import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';

export default function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	const onClick: MenuProps['onClick'] = ({ key }) => {
		setTheme(key);
	};

	const items: MenuProps['items'] = [
		{
			key: 'light',
			label: (
				<div>
					<IconSun />
					亮色
				</div>
			),
		},
		{
			key: 'dark',
			label: (
				<div>
					<IconMoon />
					暗色
				</div>
			),
		},
		{
			key: 'system',
			label: (
				<div>
					<IconDesktop />
					系统
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
        onClick
      }}
    >
      <Button type='link' className='relative'>
        <IconSun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
        <IconMoon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
      </Button>
		</Dropdown>
	);
}

import * as React from 'react';

import Link from 'next/link';

import { siteConfig } from '#/config/site-config';
import { cn } from '#/utils/tailwind';

import Icons from './Icons';
import { Dropdown } from '@antd';

export interface NavItem {
	title: string;
	href: string;
	disabled?: boolean;
	external?: boolean;
}

interface MainNavProps {
	items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="hidden items-center space-x-2 md:flex">
				<Icons.logo className="h-6 w-6" />
				<span className="hidden font-bold sm:inline-block">
					{siteConfig.name}
				</span>
			</Link>
			{items?.length ? (
				<nav className="hidden gap-6 md:flex">
					{items?.map(
						(item, index) =>
							item.href && (
								<Link
									key={index}
									href={item.href}
									className={cn(
										'flex items-center text-lg font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-100 sm:text-sm',
										item.disabled && 'cursor-not-allowed opacity-80',
									)}
								>
									{item.title}
								</Link>
							),
					)}
				</nav>
      ) : null}
      <Dropdown
        menu={{
          items: items?.map(item => ({
            key: item.title,
            label: (<Link href={item.href}>{item.title}</Link>)
          }))
        }}
      >
        <div className='btn md:hidden'>
          <Icons.logo className="mr-2 h-4 w-4" />{" "}
          <span className="font-bold">Menu</span>
        </div>
      </Dropdown>
		</div>
	);
}

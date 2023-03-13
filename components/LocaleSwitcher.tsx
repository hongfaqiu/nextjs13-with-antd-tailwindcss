'use client';

import { Dropdown } from 'antd';
import { Link } from 'next-intl';
import { usePathname } from 'next-intl/client';

import { languages } from '@/i18n';

import Icons from './Icons';

export default function LocaleSwitcher() {
	const pathname = usePathname();

	return (
		<Dropdown
			menu={{
				items: Object.entries(languages).map(([lang, setting]) => ({
					key: lang,
					label: (
						<Link href={pathname ?? '/'} locale={lang}>
							{setting.flag}&nbsp;&nbsp;{setting.name}
						</Link>
					),
				})),
			}}
		>
			<div className="btn" role={'button'} tabIndex={0}>
				<Icons.Languages className="h-5 w-5" />
			</div>
		</Dropdown>
	);
}

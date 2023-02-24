import React from 'react';

import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons/lib/components/Icon';

export function Svg2Icon(svg: JSX.Element) {
	// eslint-disable-next-line react/display-name
	return (props: Partial<CustomIconComponentProps>) => (
		<Icon component={() => svg} {...props} />
	);
}

import { Metadata } from 'next';

import logo from '@/shared/assets/icons/logo.png';
import { APP_NAME, TITLE_TEMPLATE } from '@/shared/config/seo/constants';
import { ISeo } from '@/shared/config/seo/types';
import { clearText } from '@/shared/lib/helpers/string/clearText';

export const createMetadata = ({
	title,
	isTemplate = false,
	path = '',
	description,
	image,
}: ISeo): Metadata => {
	const currentTile = isTemplate ? { template: TITLE_TEMPLATE, default: title } : title;

	if (description) {
		const currentUrl = `${process.env.APP_URL}${path}`;
		return {
			title: currentTile,
			description: clearText(description, 152),
			metadataBase: new URL(currentUrl),
			openGraph: {
				title: currentTile,
				description: clearText(description, 197),
				url: currentUrl,
				siteName: APP_NAME,
				images: image || logo.src,
				locale: 'en_US',
				type: 'website',
			},
		};
	}

	return {
		title: currentTile,
		robots: {
			index: false,
			follow: false,
		},
	};
};

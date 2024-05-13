import { Metadata } from 'next';

import logo from '@/shared/assets/icons/logo.png';
import { APP_NAME } from '@/shared/config/seo/constants';
import { ISeo } from '@/shared/config/seo/types';
import { clearText } from '@/shared/lib/helpers/string/clearText';

export const createMetadata = ({
	title,
	path = '',
	url,
	description,
	image,
	alternates,
}: ISeo): Metadata => {
	if (description) {
		const currentUrl = url ? url : `${process.env.APP_URL}${path}`;

		return {
			title: title.trim(),
			description: clearText(description, 152),
			metadataBase: new URL(currentUrl),
			alternates,
			openGraph: {
				title: title.trim(),
				description: clearText(description, 197),
				url: currentUrl,
				siteName: APP_NAME,
				images: image || logo.src,
				locale: 'ru_RU',
				type: 'website',
			},
		};
	}

	return {
		title: title.trim(),
		robots: {
			index: false,
			follow: false,
		},
	};
};

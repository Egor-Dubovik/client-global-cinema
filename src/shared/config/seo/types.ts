import { Metadata } from 'next';

export interface ISeo {
	title: string;
	description?: string;
	url?: string;
	path?: string;
	image?: string;
	alternates?: Metadata['alternates'];
}

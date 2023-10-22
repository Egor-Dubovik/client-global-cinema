import { IActor } from '@/shared/api/actors/models';
import { IGenre } from '@/shared/api/genres/models';

export interface IParameters {
	year: number;
	duration: number;
	country: string;
}

export interface IMovie {
	_id: string;
	poster: string;
	bigPoster: string;
	slug: string;
	title: string;
	description: string;
	parameters?: IParameters;
	videoUrl: string;
	genres: IGenre[];
	actors: IActor[];
	isSendTelegram?: boolean;
	countOpened: number;
}

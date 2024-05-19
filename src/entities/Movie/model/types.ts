import { IActor } from '@/entities/Actor';
import { IGenre } from '@/entities/Genre';

export interface IMovieParameters {
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
	parameters?: IMovieParameters;
	videoUrl: string;
	genres: IGenre[];
	actors: IActor[];
	isSendTelegram?: boolean;
	countOpened: number;
	rating: number;
}

export interface IMovieShortList {
	title: string;
	link: string;
	movies: IMovie[];
}

export interface IMovieEditInput extends Omit<IGenre, '_id'> {}

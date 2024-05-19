import { IMovie } from '@/entities/Movie';

export interface ISlide extends Pick<IMovie, '_id' | 'bigPoster' | 'title'> {
	subTitle: string;
	link: string;
}

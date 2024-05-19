export interface IActor {
	_id: string;
	name: string;
	slug: string;
	photo: string;
	countMovies: number;
}

export interface IActorEditInput extends Omit<IActor, '_id'> {}

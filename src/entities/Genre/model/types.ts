export interface IGenre {
	_id: string;
	name: string;
	slug: string;
	description: string;
	icon: string;
	createdAt: string;
	updatedAt: string;
}

export interface IGenreEditInput extends Omit<IGenre, '_id'> {}

export const getGenresListEach = (index: number, length: number, name: string) => {
	return index + 1 === length ? name : name + ',';
};

export const getGenresList = (arr: { name: string }[]) => {
	return arr.map((i) => i.name).join(', ');
};

export type { IGenre, IGenreEditInput } from './model/types';
export { GenreService } from './api';
export { mapGenresToNavMenu } from './api/mappers/mapGenresToNavMenu';
export { GenresTable } from './components/GenresTable/GenresTable';

export { getGenresList, getGenresListEach } from './helpers/getGenresList';

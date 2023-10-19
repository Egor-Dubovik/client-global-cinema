export const API_URL = `${process.env.SERVER_URL}/api`;

export const getAuthUrl = (path: string) => `/auth${path}`;
export const getUserUrl = (path: string) => `/users${path}`;
export const getMovieUrl = (path: string) => `/movies${path}`;
export const getGenreUrl = (path: string) => `/genres${path}`;
export const getActorUrl = (path: string) => `/actors${path}`;
export const getRatingUrl = (path: string) => `/ratings${path}`;

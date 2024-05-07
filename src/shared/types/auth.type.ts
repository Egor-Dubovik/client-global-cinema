import { NextPage } from 'next';

export type NextPageAuth<P = {}> = NextPage<P> & IRoles;
export type TypeComponentAuthFields = { Component: IRoles };

export interface IRoles {
	isOnlyAdmin?: boolean;
	isOnlyUser?: boolean;
}

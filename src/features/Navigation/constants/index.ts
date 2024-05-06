import { IMenu } from '@/shared/UI/Menu/types';

export const GENRES_MENU_AMOUNT = 4;

export const mainMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Discovery',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Fresh movies',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now',
		},
	],
};

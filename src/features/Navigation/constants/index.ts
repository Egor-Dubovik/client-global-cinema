import { IMenu } from '@/shared/UI/Menu/types';

export const GENRES_MENU_AMOUNT = 4;

export const mainMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Главная',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Дискавери',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Новое',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Актуальные',
		},
	],
};

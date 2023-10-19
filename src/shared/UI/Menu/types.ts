import { TypeMaterialIcon } from '@/shared/types/icon.type';

export interface IMenu {
	title: string;
	items: IMenuItem[];
}

export interface IMenuItem {
	icon?: TypeMaterialIcon;
	title: string;
	link: string;
}

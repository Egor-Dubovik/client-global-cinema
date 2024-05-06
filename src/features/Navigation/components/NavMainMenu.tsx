import { MenuGroup, MenuItem } from '@/shared/UI/Menu';

import { mainMenu } from '../constants';

export const NavMainMenu = () => {
	return (
		<MenuGroup title={mainMenu.title}>
			{mainMenu.items.map((item) => (
				<MenuItem key={item.link} item={item} />
			))}
		</MenuGroup>
	);
};

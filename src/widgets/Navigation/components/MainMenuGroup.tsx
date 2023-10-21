import { mainMenu } from '@/widgets/Navigation/constants/navMenu';

import { MenuGroup, MenuItem } from '@/shared/UI/Menu';

export const MainMenuGroup = () => {
	return (
		<MenuGroup title={mainMenu.title}>
			{mainMenu.items.map((item) => (
				<MenuItem key={item.link} item={item} />
			))}
		</MenuGroup>
	);
};

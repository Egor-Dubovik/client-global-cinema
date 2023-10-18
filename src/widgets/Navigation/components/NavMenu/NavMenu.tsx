import { mainMenu, userMenu } from '@/widgets/Navigation/constants/navMenu';

import { Menu, MenuGroup, MenuItem } from '@/shared/UI/Menu';

const NavMenu = () => {
	return (
		<Menu>
			<MenuGroup title={mainMenu.title}>
				{mainMenu.items.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
			</MenuGroup>

			{/* GenresMenuGroup */}

			<MenuGroup title={userMenu.title}>
				{userMenu.items.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
			</MenuGroup>
		</Menu>
	);
};

export default NavMenu;

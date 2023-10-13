import MenuItem from '@/components/Menu/IMenuItem/MenuItem';
import Menu from '@/components/Menu/Menu';
import MenuGroup from '@/components/Menu/MenuGroup/MenuGroup';
import {
	mainMenu,
	userMenu,
} from '@/components/Navigation/NavMenu/navMenu.data';

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

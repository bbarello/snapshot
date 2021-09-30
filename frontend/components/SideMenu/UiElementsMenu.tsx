import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import MenuWrapper, { Menu, MenuItem, MenuLink } from './SideMenu.styled';

const menuItems = [
    {       
		id: 1,
		label: 'Sparks, Nevada',
		path: '/uielements/sites',
	},
	
	{
		id: 2,
		label: 'Carlisle, Pennsylvania',
		path: '/uielements/sites',
	},
	{
		id: 3,
		label: 'Carlisle, Pennsylvania',
		path: '/uielements/sites',
	},
	{
		id: 4,
		label: 'Carlisle, Pennsylvania',
		path: '/uielements/sites',
	},
	{
		id: 5,
		label: 'Elk Grove, California',
		path: '/uielements/sites',
	},
	{
		id: 6,
		label: 'Fontana, California',
		path: '/uielements/sites',
	},
	{
		id: 7,
		label: 'Labanon, Tenesee',
		path: '/uielements/sites',
	},
	{
		id: 8,
		label: 'Lehigh, Pennsylvania',
		path: '/uielements/sites',
	},
	{
		id: 9,
		label: 'Mt. Juliet, Tenesse',
		path: '/uielements/sites',
	},
	
];

type MenuProps = {
	className?: string;
	onClick?: () => void;
};

const UiElementsMenu = ({ className = '', onClick }: MenuProps) => {
	const { pathname } = useRouter();
	const newpathname = pathname.split('/').slice(2, 3);
	const mainpath = `/${newpathname[0]}`;

	return (
		<Sticky top=".navbar" innerZ="1">
			<MenuWrapper className="side-menu-wrapper">
				<Menu className={`side-menu ${className}`}>
					{menuItems.map((item) => {
						const menupathname = item.path.split('/').slice(2, 3);
						const menupath = `/${menupathname[0]}`;

						return (
							<MenuItem key={`side-menu--key${item.id}`} onClick={onClick}>
								<Link href={item.path}>
									<MenuLink className={mainpath === menupath ? 'active' : ''}>
										{item.label}
									</MenuLink>
								</Link>
							</MenuItem>
						);
					})}
				</Menu>
			</MenuWrapper>
		</Sticky>
	);
};

export default UiElementsMenu;

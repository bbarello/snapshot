import React from 'react';
import ActiveLink from '../../../UiElements/NavLink/NavLink';
import Menu, { MenuItem, MenuLink } from './LeftMainMenu.styled';

const menuItems = [
  
  {
    id: 1,
    label: 'SITES',
    path: '/uielements/sites',
  },
  {
    id: 2,
    label: 'VENDORS',
    path: '/apps',
  },
  {
    id: 3,
    label: 'FUNCTION',
    path: '/shop',
  },

];

type MenuProps = {
  className?: string;
  onClick?: () => void;
};

const LeftMainMenu = ({ className, onClick }: MenuProps) => {
  return (
    <Menu className={className}>
      {menuItems.map(item => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <ActiveLink activeClassName="active" href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </ActiveLink>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default LeftMainMenu;

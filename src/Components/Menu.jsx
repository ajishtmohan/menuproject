import { NavLink } from 'react-router-dom';

const menuLinks = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'Dr. Nalini', to: '/doctor' },
  { id: 3, name: 'Treatments', to: '/treatments' },
  { id: 4, name: 'Blog', to: '/blog' },
  { id: 5, name: 'contact', to: '/contact' },
  { id: 6, name: 'Book Now', to: 'consultation' },
];

function Menu() {
  return (
    <nav className='flex gap-3 capitalize text-sm'>
      {menuLinks.map((link) =>
        link.name === 'Book Now' ? (
          <NavLink
            key={link.id}
            to={link.to}
            className={({ isActive }) =>
              `px-5 py-2 rounded-full duration-200 ${isActive ? ` bg-earth-400 text-white` : `bg-white text-earth-400`}`
            }
          >
            {link.name}
          </NavLink>
        ) : (
          <NavLink
            key={link.id}
            to={link.to}
            className={({ isActive }) =>
              `text-forest-200 hover:text-white duration-200 bg-forest-500 px-5 py-2 rounded-full hover:border-forest-100 border ${isActive ? ` text-white border-forest-100 border` : ` border-forest-500 border`}
              }`
            }
          >
            {link.name}
          </NavLink>
        ),
      )}
    </nav>
  );
}

export default Menu;

import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <header className='fixed flex w-full bg-forest-700 z-20'>
      <div className='mx-auto flex h-20 w-300 items-center justify-between'>
        <Logo />
        <Menu />
      </div>
    </header>
  );
}

export default Header;

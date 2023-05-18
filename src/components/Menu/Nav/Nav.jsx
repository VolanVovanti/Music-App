import { useState } from 'react';
import Logo from '../../../asset/img/logo.png';
import NavMenu from './Nav_menu';
import NavBurger from './NavBurgerShowHide';

function Nav() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={Logo} alt="logo" />
      </div>
      <NavBurger onClick={toggleVisibility} />
      {visible && <NavMenu />}
    </nav>
  );
}
export default Nav;

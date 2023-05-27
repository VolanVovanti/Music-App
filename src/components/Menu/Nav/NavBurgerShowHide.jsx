function NavBurger({ onClick }) {
  return (
    <div aria-hidden="true" onClick={onClick} className="nav__burger burger">
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </div>
  );
}

export default NavBurger;

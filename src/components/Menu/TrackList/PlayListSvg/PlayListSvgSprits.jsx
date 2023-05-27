import sprite from '../../../../asset/img/icon/sprite.svg';

function Icon({ icon }) {
  return <use xlinkHref={`${sprite}#icon-${icon}`} />;
}

export default Icon;

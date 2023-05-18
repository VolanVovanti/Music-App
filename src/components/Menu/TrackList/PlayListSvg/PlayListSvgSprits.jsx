import sprite from '../../../../asset/img/icon/sprite.svg';
// eslint-disable-next-line react/prop-types
function Icon({ icon }) {
  return (
    <use xlinkHref={`${sprite}#icon-${icon}`} />
  );
}
// <Icon icon="note" />
export default Icon;

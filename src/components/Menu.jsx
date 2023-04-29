/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Nav from './Nav';
import TrackList from './TrackList';
import Filters from './Filters';
import Header from './Header';

function Menu() {
  return (
    <main className="main">
      <Nav />
      <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
          <svg className="search__svg">
            <use xlinkHref="img/icon/sprite.svg#icon-search" />
          </svg>
          <input className="search__text" type="search" placeholder="Поиск" name="search" />
        </div>
        <Header />
        <Filters />
        <TrackList />
      </div>
      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__avatar" />
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img className="sidebar__img" src="img/playlist01.png" alt="day's playlist" />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img className="sidebar__img" src="img/playlist02.png" alt="day's playlist" />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img className="sidebar__img" src="img/playlist03.png" alt="day's playlist" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Menu;

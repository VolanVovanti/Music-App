/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useState, useEffect } from 'react';
import Nav from './Nav/Nav';
import TrackList from './TrackList/TrackList';
import Filters from './Filters/Filters';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function Menu() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

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
      {' '}
      <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        {loading ? (<Skeleton count={10} />) : (<Sidebar />)}
      </SkeletonTheme>
    </main>
  );
}
export default Menu;

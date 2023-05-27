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
    }, 3000);
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
          <input
            className="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
          {loading ? <Skeleton count={10} /> : <Header />}
        </SkeletonTheme>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
          {loading ? <Skeleton count={10} /> : <Filters />}
        </SkeletonTheme>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
          {loading ? <Skeleton count={10} /> : <TrackList />}
        </SkeletonTheme>
      </div>
      <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        {loading ? <Skeleton count={10} /> : <Sidebar />}
      </SkeletonTheme>
    </main>
  );
}
export default Menu;

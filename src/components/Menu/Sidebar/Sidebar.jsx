/* eslint-disable jsx-a11y/anchor-is-valid */
import Playlist01 from '../../../asset/img/playlist01.png';
import Playlist02 from '../../../asset/img/playlist02.png';
import Playlist03 from '../../../asset/img/playlist03.png';

function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">

        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img className="sidebar__img" src={Playlist01} alt="day's playlist" />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img className="sidebar__img" src={Playlist02} alt="day's playlist" />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img className="sidebar__img" src={Playlist03} alt="day's playlist" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;

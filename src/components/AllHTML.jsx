/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Menu from './Menu/Menu';
import Player from './Player/Player';

function AllHTML() {
  return (
    <div className="wrapper">
      <div className="container">
        <Menu />
        <Player />
        <footer className="footer" />
      </div>
    </div>
  );
}
export default AllHTML;

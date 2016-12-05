import React from 'react';
import { Link } from 'react-router';
import '../styles/menubar-page.css';

// Since this component is simple and static, there's no parent container for it.
const MenubarPage = () => {
  return (
    <div className="ui menu menubar">
      <div className="left menu">
        <a className="item logo-mego">
          <Link to="/">MEGO</Link>
        </a>
      </div>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..."></input>
            <i className="search link icon"></i>
          </div>
        </div>
        <a className="item">Save url</a>
        <a className="item">
          <i className="icon alrm user"></i>Alarm
        </a>
        <a className="ui item">Logout</a>
      </div>
    </div>
  );
};

export default MenubarPage;

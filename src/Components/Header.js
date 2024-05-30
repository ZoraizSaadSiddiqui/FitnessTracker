import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#097972' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <span
          className="navbar-brand"
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Times New Roman',
            letterSpacing: '0.5px',
            marginRight: 'auto',
            fontSize: '22px',
          }}
        >
          {title}
        </span>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto m-1 ">
            <li className="nav-item">
              <Link to="/home" className="nav-link" style={{ color: 'white' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workoutSchedule" className="nav-link" style={{ color: 'white' }}>
                WorkoutSchedule
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/goals" className="nav-link" style={{ color: 'white' }}>
                Goals
              </Link>
            </li>
            {/* Add other navigation links here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

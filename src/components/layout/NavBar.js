import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={props.iconCode} />
        {props.title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
NavBar.defaultProps = {
  title: ' GitHub Finder',
  iconCode: 'fab fa-github-alt',
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  iconCode: PropTypes.string.isRequired,
};
export default NavBar;

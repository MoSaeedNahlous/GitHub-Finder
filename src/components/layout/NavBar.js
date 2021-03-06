import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/theme/ThemeState';

const NavBar = (props) => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);
  return (
    <nav className={theme === 'light' ? 'navbar bg-primary' : 'navbar bg-dark'}>
      <h1>
        <Link to='/'>
          <i className={props.iconCode} />
          {props.title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <button
            className={theme === 'light' ? 'bg-primary ' : 'bg-dark '}
            style={{
              border: '0.5px solid #f4f4f4',
              borderRadius: '5px',
              padding: '10px',
              cursor: 'pointer',
            }}
            onClick={() =>
              themeSwitchHandler(theme === 'light' ? 'dark' : 'light')
            }
          >
            Current Theme: {theme}
          </button>
        </li>
      </ul>
    </nav>
  );
};
NavBar.defaultProps = {
  title: ' GitHub Finder',
  iconCode: 'fab fa-github',
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  iconCode: PropTypes.string.isRequired,
};
export default NavBar;

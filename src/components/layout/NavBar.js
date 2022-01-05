import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/theme/ThemeState';

const NavBar = (props) => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);

  // useEffect(() => {
  //   window.localStorage.setItem('theme', theme);
  // }, [theme]);

  return (
    <nav className={theme === 'light' ? 'navbar bg-primary' : 'navbar bg-dark'}>
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
  iconCode: 'fab fa-github-alt',
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  iconCode: PropTypes.string.isRequired,
};
export default NavBar;

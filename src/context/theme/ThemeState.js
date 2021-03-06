import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({
  currentTheme: '',
  themeSwitchHandler: () => {},
});

const GlobalContextProvider = (props) => {
  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage.getItem('theme') == null
      ? 'light'
      : window.localStorage.getItem('theme')
  );

  const themeSwitchHandler = (themeType) => {
    setCurrentTheme(themeType);
  };

  return (
    <GlobalContext.Provider
      value={{
        theme: currentTheme,
        themeSwitchHandler,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

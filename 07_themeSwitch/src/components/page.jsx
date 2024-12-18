import React, { useContext } from 'react';
import ThemeContext from '../context/Theme';

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  const mainStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center'
  };

  return <main style={mainStyle}>This is the Main Content</main>;
};

export default MainContent;

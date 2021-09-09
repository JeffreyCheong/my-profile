import { responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import { UnderConstruction } from './views';
import { dark, light } from './utils/helpers/theme';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={responsiveFontSizes(dark)}>
        <UnderConstruction></UnderConstruction>
      </ThemeProvider>
    </>
  );
}

export default App;

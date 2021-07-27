// Routes
import { Routes } from './routes';
// Global styles
import { GlobalStyle } from './styles/global';
// instruments
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

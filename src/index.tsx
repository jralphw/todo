import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './pages/home';
import HistoryPage from './pages/history';
import SettingsPage from './pages/settings';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },]
  }
]);

const theme = extendTheme({ cssVarPrefix: 'demo' });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssVarsProvider
      theme={theme}
    >
    <RouterProvider router={router} /></CssVarsProvider>
  </React.StrictMode>
);

/*
If you want to start measuring performance in your app, pass a function
to log results (for example: reportWebVitals(console.log))
or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
reportWebVitals();

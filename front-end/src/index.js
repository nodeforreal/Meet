import React from 'react';
import ReactDOM from 'react-dom/client';

import MeetPage from './pages/MeetPage';
import AuthPage from './pages/AuthPage';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('app-root'));

root.render(
  <React.StrictMode>
    <MeetPage />
    {/* <AuthPage /> */}
  </React.StrictMode>
);

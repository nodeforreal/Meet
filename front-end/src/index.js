import React from 'react';
import ReactDOM from 'react-dom/client';

import MeetPage from './pages/MeetPage';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('app-root'));

root.render(
  <React.StrictMode>
    <div className="light-theme">
      <MeetPage />
    </div>
  </React.StrictMode>
);

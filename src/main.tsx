import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app.tsx';
import './global.css';
import './i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div>loading...</div>}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Suspense>,
)

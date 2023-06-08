import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';

import React from 'react';

function Myroute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Myroute;

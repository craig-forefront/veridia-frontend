import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}>
        {/* Default home content can be defined as an index route */}
        <Route index element={<div>Home Content</div>} />
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
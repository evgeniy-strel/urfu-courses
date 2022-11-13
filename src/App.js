import React from 'react';
import './style.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Search from './pages/Search/Search';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main_container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

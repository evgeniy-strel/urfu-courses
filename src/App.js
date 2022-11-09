import React from 'react';
import './style.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Cards from './components/Cards/Cards';
import Tracks from './components/Tracks/Tracks';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

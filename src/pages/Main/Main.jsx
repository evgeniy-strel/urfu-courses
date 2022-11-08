import React from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import Tracks from '../../components/Tracks/Tracks';

const Main = () => {
    return (
        <div className="main_container">
            <Header/>
            <Cards/>
            <Tracks/>
        </div>
    );
};

export default Main;

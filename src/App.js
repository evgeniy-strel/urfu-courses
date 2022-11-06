import React from "react";
import './App.scss';
//Bootstrap
import {Container} from 'react-bootstrap'
//Components
import NaviBar from "./components/Header";
import CourseBar from "./components/Sidebar";


function App() {
    return (
        <>
            {/*Header*/}
            <NaviBar/>

            {/*Main Content*/}
            <Container>
                {/*Sidebar*/}
                <CourseBar/>

            </Container>

        </>

    );
}

export default App;

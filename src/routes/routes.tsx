import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

//pages
import { Home } from '../pages/Home';
import { About } from '../pages/About';

export const AppRoutes = () => {

    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </React.Fragment>
    )
}
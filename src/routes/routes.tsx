import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

//pages
import { Home } from '../pages/Home';
import { ContactMe } from '../pages/ContactMe';

//projects
import { Alpine } from '../pages/projects/Alpine';
import { NationalParks } from '../pages/projects/NationalParks';
import { DietBank } from '../pages/projects/DietBank';

export const AppRoutes = () => {

    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<ContactMe />} />
                <Route path='/projects/alpine-twin-peak-maintenance' element={<Alpine />} />
                <Route path='/projects/national-parks' element={<NationalParks />} />
                <Route path='/projects/diet-bank' element={<DietBank />} />
            </Routes>
        </React.Fragment>
    )
}
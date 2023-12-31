import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import routes from 'components/routes/routes';
import About from "components/pages/About";
import Main from "components/pages/Main";
import DetailCard from 'components/pages/DetailCard';
import NotFound from "components/pages/NotFound";


const PageRoutes = () => {
    return (
        <Routes>
            <Route path={routes.main} element={<Main/>}/>
            <Route path={routes.about} element={<About/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
            <Route path={routes.detail} element={<DetailCard/>}/>
            <Route path="*" element={<Navigate replace to={routes.notFound}/>}/>
        </Routes>
    );
};

export default PageRoutes;

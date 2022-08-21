
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './componentes/Layout';
import CountriesList from './pages/CountriesList';
import CountryDetails from './pages/CountryDetails';


function RoutesList() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout>
                <Routes>
                    <Route path="/" element={<CountriesList />} />
                </Routes>
                <Routes>
                    <Route path="/country_details/:name/:code" element={<CountryDetails />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default RoutesList
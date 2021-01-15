import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

// Rotas
function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={HomePage} />
        </BrowserRouter>
    )
}

export default Routes;
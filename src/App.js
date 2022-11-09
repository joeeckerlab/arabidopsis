import React from 'react';
import './App.css';
// import {BrowserRouter as Router} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

const App = () => {
    return (
        <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
            <Routes>
                <Route path='' element={<Home />} exact />
                <Route path='/signin' element={<SigninPage />} exact />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

import React from 'react';
import './App.css';
// import {BrowserRouter as Router} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/signin';
// import Dashboard from './pages/Dashboard/DashboardIndex';


const App = () => {
    return (
        // <Router>
        //     <Dashboard />
        // </Router>
        //
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/signin' element={<SignIn />} exact />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

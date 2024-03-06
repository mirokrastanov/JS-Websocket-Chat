import { useState } from 'react';
import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {

    return (
        <>
            <div className='p-4 h-screen flex items-center justify-center'>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/home' element={<Navigate to='/' />} />
                    <Route path='index' element={<Navigate to='/' />} />
                    
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </>
    )
}

export default App;

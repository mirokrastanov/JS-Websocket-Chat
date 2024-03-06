import { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
    const { authUser } = useAuthContext();

    // useEffect(() => {
    //     console.log(authUser);
    // }, []);

    return (
        <>
            <div className='p-4 h-screen flex items-center justify-center'>
                <Toaster />
                <Routes>
                    <Route exact path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
                    <Route path='/home' element={<Navigate to='/' />} />
                    <Route path='/index' element={<Navigate to='/' />} />

                    <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
                    <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
                </Routes>
            </div>
        </>
    )
}

export default App;

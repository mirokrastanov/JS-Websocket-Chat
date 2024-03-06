import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')) || null);

    // TODO
    // move all auth hooks here
    // create checkUserStatus() method
    // invoke checkUserStatus() on load via useEffect[]
    // move all methods into a contextData object and 
    //    PROVIDE that instead of what's currently provided
    // ADD conditional (loading based) rendering of the children
    // hence - have a loading state stored in here!

    // check if more is necessary when optimizing the code later on >>>

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
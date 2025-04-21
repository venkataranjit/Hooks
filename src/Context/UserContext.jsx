import React, { createContext } from 'react';

const UserContext = createContext();

const UserContextProvider = ({children}) => {

    const data = {
        name: "ranjit",
        age: 36
    }

    return <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
}

export {UserContext, UserContextProvider};
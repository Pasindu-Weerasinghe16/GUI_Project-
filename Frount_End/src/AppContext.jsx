import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AppContext.Provider value={{ IsLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
"use client"
import React from 'react';

export const Context = React.createContext();


export const ContextProvider = ({ children }) => {
    const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false)

    return (
        <Context.Provider value={{ sidebarIsOpen, setSidebarIsOpen }}>
            {children}
        </Context.Provider>
    );
};

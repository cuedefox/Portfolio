import { createContext, useState } from "react";
import React from "react";

export const Language = createContext({});

const LanguageProvider = ({ children }) => {
    const [languageEn, setLanguageEn] = useState(false);

    return (
        <Language.Provider
            value={{
                languageEn,
                setLanguageEn
            }}
        >
            {children}
        </Language.Provider>
    );
};

export default LanguageProvider;
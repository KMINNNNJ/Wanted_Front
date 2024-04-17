import React, { createContext, useState } from 'react';

export const GithubContext = createContext();

const ContextProvider = ({ children }) => {
    const [issues, setIssues] = useState([]);
    const [selectedIssue, setSelectedIssue] = useState(null);

    return (
        <GithubContext.Provider value={{ issues, setIssues, selectedIssue, setSelectedIssue }}>
            {children}
        </GithubContext.Provider>
    );
};

export default ContextProvider;

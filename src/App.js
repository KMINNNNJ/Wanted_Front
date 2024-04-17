
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContextProvider from './Context';
import IssueList from './IssueList';
import IssueDetail from './IssueDetail';

const App = () => {
    return (
        <Router>
            <ContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<IssueList />} />
                    <Route path="/issue/:id" element={<IssueDetail />} />
                </Routes>
            </ContextProvider>
        </Router>
    );
};

const Header = () => {
    return (
        <div className="header">
            <h1>Organization Name / Repository Name</h1>
        </div>
    );
};

export default App;

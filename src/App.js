import React from 'react';
import GlobalStyle from './Utilities';
import Home from './Pages/Home';
import { Nav } from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
    return (
        <div style={{ position: "relative" }}>
            <GlobalStyle />
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
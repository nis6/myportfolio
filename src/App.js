import React from 'react';
import GlobalStyle from './Utilities';
import Home from './Pages/Home';
import { Nav } from './components/Nav';


export default function App() {
    return (
        <div style={{ position: "relative" }}>
            <GlobalStyle />
            <Nav />
            <Home />
        </div>
    )
}
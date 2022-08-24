import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './Utilities';
import Header from './components/Header';
import { Nav } from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Skillset from './components/Skillset';
import Contact from './components/Contact';

export default function App() {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <About />
            <Skillset />
            <Portfolio />
            <Blog />
            <Contact />
        </div>
    )
}
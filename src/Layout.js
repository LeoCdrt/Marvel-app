import React from 'react';
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import packageJson from '../package.json';

const Layout = () => {
    const version = packageJson.version;

    return (
        <>
            <header>
                <h1>Marvel App</h1>
                <nav>
                    <NavLink to="/">Home</NavLink> - <NavLink to="/about">About</NavLink> - <NavLink to="/contact">Contact</NavLink> - <NavLink to="/questions15">Les questions 1-5</NavLink> - <NavLink to="/questions510">Les questions 6-10</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Marvel App - {version}</p>
            </footer>
        </>
    );
};

export default Layout;

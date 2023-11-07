import React from 'react';
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <h1>Marvel App</h1>
                <nav>
                    <NavLink to="/">Menu</NavLink> - <NavLink to="/about">A propos</NavLink> - <NavLink to="/contact">Contact</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Marvel App - 2023</p>
            </footer>
        </>
    );
};

export default Layout;
